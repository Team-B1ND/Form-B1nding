import React from "react";
import { DialogContentText } from "./style";
import { DialogContentProps } from "./types";

export const DialogContent = ({ children }: DialogContentProps) => {
  return <DialogContentText>{children}</DialogContentText>;
};
