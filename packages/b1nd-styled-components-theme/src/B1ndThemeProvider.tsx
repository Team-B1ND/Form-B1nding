import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import React from "react";
import { darkTheme, lightTheme } from "./b1ndTheme";

interface Props {
  children: ReactNode;
  mode: "LIGHT" | "DARK";
}

export const B1ndThemeProvider = ({ children, mode }: Props) => {
  return (
    <ThemeProvider theme={mode === "LIGHT" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};
