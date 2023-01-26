import React from "react";
import { DialogButtonsContainr } from "./style";
import { DialogButtonsProps } from "./types";

const DialogButtons = ({
  children,
  mainColor = "#0067bc",
}: DialogButtonsProps) => {
  return (
    <DialogButtonsContainr mainColor={mainColor}>
      {children}
    </DialogButtonsContainr>
  );
};

export default DialogButtons;
