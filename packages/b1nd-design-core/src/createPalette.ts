import { b1ndPalette } from "./b1ndPalette";

interface Param {
  mainColor: string;
  subMainColor?: string;
}

export const createPalette = ({ mainColor, subMainColor }: Param) => {
  let copyPalette = JSON.parse(JSON.stringify(b1ndPalette));

  copyPalette["main"] = mainColor;

  if (subMainColor) {
    copyPalette["sub"] = subMainColor;
  }

  return copyPalette;
};
