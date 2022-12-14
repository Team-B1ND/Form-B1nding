var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// pnp:/Users/limdonghyun/Documents/StudyWebs/B1ND_Design_System/packages/b1nd-design-core/src/index.ts
var src_exports = {};
__export(src_exports, {
  b1ndPalette: () => b1ndPalette,
  createPalette: () => createPalette
});
module.exports = __toCommonJS(src_exports);

// pnp:/Users/limdonghyun/Documents/StudyWebs/B1ND_Design_System/packages/b1nd-design-core/src/b1ndPalette.ts
var red = {
  "50": "#ffebee",
  "100": "#ffcdd2",
  "200": "#ef9a9a",
  "300": "#e57373",
  "400": "#ef5350",
  "500": "#f44336",
  "600": "#e53935",
  "700": "#d32f2f",
  "800": "#c62828",
  "900": "#b71c1c"
};
var purple = {
  "50": "#f3e5f5",
  "100": "#e1bee7",
  "200": "#ce93d8",
  "300": "#ba68c8",
  "400": "#ab47bc",
  "500": "#9c27b0",
  "600": "#8e24aa",
  "700": "#7b1fa2",
  "800": "#6a1b9a",
  "900": "#4a148c"
};
var indigo = {
  "50": "#e8eaf6",
  "100": "#c5cae9",
  "200": "#9fa8da",
  "300": "#7986cb",
  "400": "#5c6bc0",
  "500": "#3f51b5",
  "600": "#3949ab",
  "700": "#303f9f",
  "800": "#283593",
  "900": "#1a237e"
};
var blue = {
  "10": "#f3f9fe",
  "50": "#e3f2fd",
  "100": "#bbdefb",
  "200": "#90caf9",
  "300": "#64b5f6",
  "400": "#42a5f5",
  "500": "#2196f3",
  "600": "#1e88e5",
  "700": "#1976d2",
  "800": "#1565c0",
  "900": "#0d47a1"
};
var lightBlue = {
  "50": "#e1f5fe",
  "100": "#b3e5fc",
  "200": "#81d4fa",
  "300": "#4fc3f7",
  "400": "#29b6f6",
  "500": "#03a9f4",
  "600": "#039be5",
  "700": "#0288d1",
  "800": "#0277bd",
  "900": "#01579b"
};
var teal = {
  "50": "#e0f2f1",
  "100": "#b2dfdb",
  "200": "#80cbc4",
  "300": "#4db6ac",
  "400": "#26a69a",
  "500": "#009688",
  "600": "#00897b",
  "700": "#00796b",
  "800": "#00695c",
  "900": "#004d40"
};
var lime = {
  "50": "#f9fbe7",
  "100": "#f0f4c3",
  "200": "#e6ee9c",
  "300": "#dce775",
  "400": "#d4e157",
  "500": "#cddc39",
  "600": "#c0ca33",
  "700": "#afb42b",
  "800": "#9e9d24",
  "900": "#827717"
};
var yellow = {
  "50": "#fffde7",
  "100": "#fff9c4",
  "200": "#fff59d",
  "300": "#fff176",
  "400": "#ffee58",
  "500": "#ffeb3b",
  "600": "#fdd835",
  "700": "#fbc02d",
  "800": "#f9a825",
  "900": "#f57f17"
};
var orange = {
  "50": "#fff3e0",
  "100": "#ffe0b2",
  "200": "#ffcc80",
  "300": "#ffb74d",
  "400": "#ffa726",
  "500": "#ff9800",
  "600": "#fb8c00",
  "700": "#f57c00",
  "800": "#ef6c00",
  "900": "#e65100"
};
var gray = {
  "100": "#ffffff",
  "200": "#dbdbdb",
  "300": "#b5b5b5",
  "400": "#707070",
  "500": "#494949",
  "600": "#262626",
  "700": "#000000"
};
var b1ndPalette = {
  red,
  orange,
  yellow,
  blue,
  lightBlue,
  teal,
  lime,
  purple,
  indigo,
  gray
};

// pnp:/Users/limdonghyun/Documents/StudyWebs/B1ND_Design_System/packages/b1nd-design-core/src/createPalette.ts
var createPalette = ({ mainColor, subMainColor }) => {
  let copyPalette = JSON.parse(JSON.stringify(b1ndPalette));
  copyPalette["main"] = mainColor;
  if (subMainColor) {
    copyPalette["sub"] = subMainColor;
  }
  return copyPalette;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  b1ndPalette,
  createPalette
});
//# sourceMappingURL=index.js.map
