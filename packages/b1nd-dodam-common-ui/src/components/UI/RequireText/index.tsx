import React from "react";
import { RequireTextProps } from "./types";
import { RequireTextBox } from "./style";

export const RequireText = ({ children }: RequireTextProps) => {
  return <RequireTextBox>{children}</RequireTextBox>;
};
