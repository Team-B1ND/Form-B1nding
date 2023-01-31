import React from "react";
import { DialogTitleText } from "./style";
import { DialogTitleProps } from "./types";

export const DialogTitle = ({ children }: DialogTitleProps) => {
  return <DialogTitleText>{children}</DialogTitleText>;
};
