import React from "react";

export type FlexJustify = "center" | "start" | "end" | "between" | "around";
export type FlexAlign = "start" | "end" | "center" | "baseline";
export type FlexDirection = "row" | "column";

export interface FlexProps {
  children: React.ReactNode;
  gap?: number;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  customStyle?: React.CSSProperties;
}
