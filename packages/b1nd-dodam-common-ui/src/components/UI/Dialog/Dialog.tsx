import React from "react";
import DialogButtons from "./DialogButtons";
import { DialogContent } from "./DialogContent";
import { DialogTitle } from "./DialogTitle";
import { DialogBackground, DialogContainer } from "./style";
import { DialogProps } from "./types";

export const Dialog = ({
  isOpen,
  customStyle,
  children,
  width,
  zIndex,
  onClose,
}: DialogProps) => {
  return (
    <>
      {isOpen && (
        <>
          <DialogBackground
            style={{ zIndex: zIndex ?? 1 }}
            onClick={() => onClose()}
          />
          <DialogContainer
            width={width ?? 425}
            style={{ zIndex: zIndex ? zIndex + 1 : 1, ...customStyle }}
          >
            {children}
          </DialogContainer>
        </>
      )}
    </>
  );
};

export default Object.assign(Dialog, {
  Title: DialogTitle,
  Content: DialogContent,
  Buttons: DialogButtons,
});
