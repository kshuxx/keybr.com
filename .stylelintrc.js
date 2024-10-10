"use strict";

module.exports = {
  customSyntax: "postcss-less",
  extends: ["stylelint-config-recommended"],
  plugins: ["stylelint-plugin-logical-css", "stylelint-order"],
  rules: {
    "property-no-unknown": [
      true,
      {
        ignoreProperties: [
          // CSS Modules composition
          // https://github.com/css-modules/css-modules#composition
          "composes",
        ],
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: [
          // CSS Modules :global and :local scopes
          // https://github.com/css-modules/css-modules#exceptions
          "global",
          "local",
        ],
      },
    ],
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: [
          // Less Preprocessor functions
          "saturate",
          "desaturate",
          "lighten",
          "darken",
          "mix",
          "tint",
          "shade",
          "contrast",
        ],
      },
    ],
    "no-invalid-position-at-import-rule": null,
    "plugin/use-logical-properties-and-values": [true, { severity: "warning" }],
    "plugin/use-logical-units": [true, { severity: "warning" }],
    "order/order": [
      [
        "at-variables",
        "custom-properties",
        "at-rules",
        "declarations",
        {
          type: "at-rule",
          name: "supports",
        },
        {
          type: "at-rule",
          name: "media",
        },
        "rules",
      ],
      { severity: "warning" },
    ],
    "order/properties-order": [
      [
        "composes",
        "all",
        "content",
        "display",
        "position",
        "left",
        "right",
        "top",
        "bottom",
        "inset",
        "inset-inline",
        "inset-inline-start",
        "inset-inline-end",
        "inset-block",
        "inset-block-start",
        "inset-block-end",
        "z-index",
        "flex",
        "flex-direction",
        "flex-grow",
        "flex-shrink",
        "flex-basis",
        "flex-flow",
        "flex-wrap",
        "grid",
        "grid-area",
        "grid-template",
        "grid-template-areas",
        "grid-template-rows",
        "grid-template-columns",
        "grid-row",
        "grid-row-start",
        "grid-row-end",
        "grid-column",
        "grid-column-start",
        "grid-column-end",
        "grid-auto-rows",
        "grid-auto-columns",
        "grid-auto-flow",
        "grid-gap",
        "grid-row-gap",
        "grid-column-gap",
        "gap",
        "row-gap",
        "column-gap",
        "align-content",
        "align-items",
        "align-self",
        "justify-content",
        "justify-items",
        "justify-self",
        "place-content",
        "place-items",
        "place-self",
        "vertical-align",
        "order",
        "float",
        "clear",
        "object-fit",
        "object-position",
        "clip",
        "table-layout",
        "caption-side",
        "empty-cells",
        "list-style",
        "list-style-position",
        "list-style-type",
        "list-style-image",

        //
        "box-sizing",
        "width",
        "min-width",
        "max-width",
        "inline-size",
        "min-inline-size",
        "max-inline-size",
        "height",
        "min-height",
        "max-height",
        "block-size",
        "min-block-size",
        "max-block-size",
        "margin",
        "margin-left",
        "margin-right",
        "margin-top",
        "margin-bottom",
        "margin-inline",
        "margin-inline-start",
        "margin-inline-end",
        "margin-block",
        "margin-block-start",
        "margin-block-end",
        "padding",
        "padding-left",
        "padding-right",
        "padding-top",
        "padding-bottom",
        "padding-inline",
        "padding-inline-start",
        "padding-inline-end",
        "padding-block",
        "padding-block-start",
        "padding-block-end",
        "border",
        "border-spacing",
        "border-collapse",
        "border-width",
        "border-style",
        "border-color",
        "border-left",
        "border-left-width",
        "border-left-style",
        "border-left-color",
        "border-right",
        "border-right-width",
        "border-right-style",
        "border-right-color",
        "border-top",
        "border-top-width",
        "border-top-style",
        "border-top-color",
        "border-bottom",
        "border-bottom-width",
        "border-bottom-style",
        "border-bottom-color",
        "border-inline",
        "border-inline-start",
        "border-inline-start-color",
        "border-inline-start-style",
        "border-inline-start-width",
        "border-inline-end",
        "border-inline-end-color",
        "border-inline-end-style",
        "border-inline-end-width",
        "border-block",
        "border-block-start",
        "border-block-start-color",
        "border-block-start-style",
        "border-block-start-width",
        "border-block-end",
        "border-block-end-color",
        "border-block-end-style",
        "border-block-end-width",
        "border-radius",
        "border-top-left-radius",
        "border-top-right-radius",
        "border-bottom-right-radius",
        "border-bottom-left-radius",
        "border-start-start-radius",
        "border-start-end-radius",
        "border-end-start-radius",
        "border-end-end-radius",
        "border-image",
        "border-image-source",
        "border-image-slice",
        "border-image-width",
        "border-image-outset",
        "border-image-repeat",
        "border-top-image",
        "border-right-image",
        "border-bottom-image",
        "border-left-image",
        "border-corner-image",
        "border-top-left-image",
        "border-top-right-image",
        "border-bottom-right-image",
        "border-bottom-left-image",
        "overflow",
        "overflow-anchor",
        "overflow-x",
        "overflow-y",
        "overflow-inline",
        "overflow-block",
        "overflow-clip-margin",
        "scroll-behavior",
        "overscroll-behavior",
        "overscroll-behavior-x",
        "overscroll-behavior-y",
        "overscroll-behavior-inline",
        "overscroll-behavior-block",

        //
        "color",
        "background",
        "background-color",
        "background-image",
        "background-attachment",
        "background-position",
        "background-position-x",
        "background-position-y",
        "background-clip",
        "background-origin",
        "background-size",
        "background-repeat",
        "scrollbar-color",
        "scrollbar-width",
        "scrollbar-gutter",
        "box-decoration-break",
        "box-shadow",
        "outline",
        "outline-width",
        "outline-style",
        "outline-color",
        "outline-offset",

        //
        "fill",
        "fill-opacity",
        "fill-rule",
        "stroke",
        "stroke-opacity",
        "stroke-width",
        "stroke-linejoin",
        "stroke-linecap",
        "stroke-miterlimit",
        "stroke-dashoffset",
        "stroke-dasharray",
        "opacity",
        "visibility",
        "filter",
        "will-change",

        //
        "font",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-weight",
        "font-style",
        "font-stretch",
        "font-kerning",
        "font-variant",
        "font-display",
        "src",
        "line-height",
        "letter-spacing",
        "quotes",
        "counter-increment",
        "counter-reset",
        "text-align",
        "text-align-last",
        "text-decoration",
        "text-emphasis",
        "text-emphasis-position",
        "text-emphasis-style",
        "text-emphasis-color",
        "text-indent",
        "text-justify",
        "text-outline",
        "text-transform",
        "text-wrap",
        "text-overflow",
        "text-overflow-ellipsis",
        "text-overflow-mode",
        "text-shadow",
        "white-space",
        "word-spacing",
        "word-wrap",
        "word-break",
        "overflow-wrap",
        "tab-size",
        "hyphens",
        "interpolation-mode",

        //
        "resize",
        "cursor",
        "pointer-events",
        "user-select",

        //
        "unicode-bidi",
        "direction",
        "columns",
        "column-span",
        "column-width",
        "column-count",
        "column-fill",
        "column-gap",
        "column-rule",
        "column-rule-width",
        "column-rule-style",
        "column-rule-color",
        "break-before",
        "break-inside",
        "break-after",
        "page-break-before",
        "page-break-inside",
        "page-break-after",
        "orphans",
        "widows",
        "zoom",
        "max-zoom",
        "min-zoom",
        "user-zoom",
        "orientation",

        //
        "transition",
        "transition-delay",
        "transition-timing-function",
        "transition-duration",
        "transition-property",
        "transform",
        "transform-origin",
        "animation",
        "animation-name",
        "animation-duration",
        "animation-play-state",
        "animation-timing-function",
        "animation-delay",
        "animation-iteration-count",
        "animation-direction",
        "animation-fill-mode",
      ],
      {
        unspecified: "bottom",
        severity: "warning",
      },
    ],
  },
};
