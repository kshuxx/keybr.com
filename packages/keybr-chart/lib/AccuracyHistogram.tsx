import { useIntlNumbers } from "@keybr/intl";
import { type Distribution, Range, Vector } from "@keybr/math";
import { Canvas, type Rect, type ShapeList, Shapes } from "@keybr/widget";
import { type ReactNode } from "react";
import { useIntl } from "react-intl";
import { Chart, chartArea, type SizeProps } from "./Chart.tsx";
import { withStyles } from "./decoration.ts";
import { type Threshold } from "./SpeedHistogram.tsx";
import { type Styles, useStyles } from "./styles.ts";

export function AccuracyHistogram({
  distribution,
  thresholds,
  width,
  height,
}: {
  readonly distribution: Distribution;
  readonly thresholds: readonly Threshold[];
} & SizeProps): ReactNode {
  const styles = useStyles();
  const paint = usePaint(styles, distribution, thresholds);
  return (
    <Chart width={width} height={height}>
      <Canvas paint={chartArea(styles, paint)} />
    </Chart>
  );
}

function usePaint(
  styles: Styles,
  dist: Distribution,
  thresholds: readonly Threshold[],
) {
  const { formatMessage } = useIntl();
  const { formatPercents } = useIntlNumbers();
  const g = withStyles(styles);

  const scale = dist.length - 1;

  const vIndex = new Vector();
  const vPmf = new Vector();
  const vCdf = new Vector();
  for (let index = 0; index < dist.length; index++) {
    vIndex.add(index);
    vPmf.add(dist.pmf(index));
    vCdf.add(dist.cdf(index));
  }
  const rIndex = new Range(Math.floor(0.8 * scale), scale);
  const rPmf = Range.from(vPmf);
  const rCdf = Range.from(vCdf);

  return (box: Rect): ShapeList => {
    return [
      g.paintGrid(box, "vertical", { lines: 5 }),
      g.paintGrid(box, "horizontal", { lines: 5 }),
      paintPmfHistogram(),
      paintCdfHistogram(),
      thresholds.length > 0
        ? [thresholds.map(paintPmfLine), thresholds.map(paintCdfLine)]
        : g.paintNoData(box, formatMessage),
      g.paintAxis(box, "bottom"),
      g.paintAxis(box, "left"),
      g.paintTicks(box, rIndex, "bottom", {
        lines: 5,
        fmt: (v) => formatPercents(v / scale),
        style: styles.valueLabel,
      }),
      g.paintTicks(box, rCdf, "right", {
        lines: 5,
        fmt: formatPercents,
        style: styles.thresholdLabel,
      }),
    ];

    function paintPmfHistogram(): ShapeList {
      return Shapes.fill(
        styles.speed,
        [...rIndex].map((index) => {
          const w = Math.ceil(box.width / rIndex.span);
          const x = Math.round(rIndex.normalize(index) * box.width);
          const y = Math.round(rPmf.normalize(vPmf.at(index)) * box.height);
          return Shapes.rect({
            x: box.x + x,
            y: box.y + box.height - y,
            width: w,
            height: y,
          });
        }),
      );
    }

    function paintCdfHistogram(): ShapeList {
      return Shapes.fill(
        styles.threshold,
        [...rIndex].map((index) => {
          const w = Math.ceil(box.width / rIndex.span);
          const x = Math.round(rIndex.normalize(index) * box.width);
          const y = Math.round(rCdf.normalize(vCdf.at(index)) * box.height);
          return Shapes.rect({
            x: box.x + x,
            y: box.y + box.height - y - 1,
            width: w,
            height: 3,
          });
        }),
      );
    }

    function paintPmfLine({
      label,
      value,
    }: {
      label: string;
      value: number;
    }): ShapeList {
      if (value * scale < rIndex.min || value > rIndex.max * scale) {
        return [];
      }
      const x = Math.round(rIndex.normalize(value * scale) * box.width);
      return [
        Shapes.fill(styles.value, [
          Shapes.rect({
            x: box.x + x,
            y: box.y - 10,
            width: 1,
            height: box.height + 20,
          }),
        ]),
        Shapes.fillText({
          x: box.x + x + 5,
          y: box.y + box.height - 5,
          value: formatPercents(value),
          style: {
            ...styles.valueLabel,
            textAlign: "left",
            textBaseline: "bottom",
          },
        }),
      ];
    }

    function paintCdfLine({
      label,
      value,
    }: {
      label: string;
      value: number;
    }): ShapeList {
      if (value * scale < rIndex.min || value * scale > rIndex.max) {
        return [];
      }
      const y = Math.round(
        rCdf.normalize(dist.cdf(value * scale)) * box.height,
      );
      return [
        Shapes.fill(styles.threshold, [
          Shapes.rect({
            x: box.x - 10,
            y: box.y + box.height - y,
            width: box.width + 20,
            height: 1,
          }),
        ]),
        Shapes.fillText({
          x: box.x + box.width - 5,
          y: box.y + box.height - y - 5,
          value: formatPercents(dist.cdf(value * scale)),
          style: {
            ...styles.thresholdLabel,
            textAlign: "right",
            textBaseline: "bottom",
          },
        }),
      ];
    }
  };
}
