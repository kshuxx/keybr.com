import { type FingerId, type GeometryDict, type KeyId } from "../../types.ts";

const ANGLEMOD: Record<KeyId, FingerId> = {
  Backquote: "pinky",
  Digit1: "pinky",
  Digit2: "ring",
  Digit3: "middle",
  Digit4: "middle",
  Digit5: "indexLeft",
  Digit6: "indexLeft",
  Digit7: "indexRight",
  Digit8: "indexRight",
  Digit9: "middle",
  Digit0: "ring",
  Minus: "pinky",
  Equal: "pinky",
  Backspace: "pinky",
  Tab: "pinky",
  KeyQ: "pinky",
  KeyW: "ring",
  KeyE: "middle",
  KeyR: "indexLeft",
  KeyT: "indexLeft",
  KeyY: "indexRight",
  KeyU: "indexRight",
  KeyI: "middle",
  KeyO: "ring",
  KeyP: "pinky",
  BracketLeft: "pinky",
  BracketRight: "pinky",
  Backslash: "pinky",
  CapsLock: "pinky",
  KeyA: "pinky",
  KeyS: "ring",
  KeyD: "middle",
  KeyF: "indexLeft",
  KeyG: "indexLeft",
  KeyH: "indexRight",
  KeyJ: "indexRight",
  KeyK: "middle",
  KeyL: "ring",
  Semicolon: "pinky",
  Quote: "pinky",
  Enter: "pinky",
  ShiftLeft: "pinky",
  KeyZ: "ring",
  KeyX: "middle",
  KeyC: "indexLeft",
  KeyV: "indexLeft",
  KeyB: "indexLeft",
  KeyN: "indexRight",
  KeyM: "indexRight",
  Comma: "middle",
  Period: "ring",
  Slash: "pinky",
  ShiftRight: "pinky",
  ControlLeft: "pinky",
  AltLeft: "pinky",
  Space: "thumb",
  AltRight: "pinky",
  ControlRight: "pinky",
};

export function anglemod(geometry: GeometryDict): GeometryDict {
  const result: Record<KeyId, GeometryDict["keyId"]> = {};
  for (const [keyId, shape] of Object.entries(geometry)) {
    result[keyId] = { ...shape, finger: ANGLEMOD[keyId] ?? shape.finger };
  }
  return result;
}
