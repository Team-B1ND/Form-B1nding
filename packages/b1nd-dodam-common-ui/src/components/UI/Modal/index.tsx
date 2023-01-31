import React from "react";
import { ModalBackground, ModalContainer } from "./style";
import { ModalProps } from "./types";

const Modal = ({
  width,
  height,
  zIndex,
  isOpen,
  setIsOpen,
  children,
  customStyle,
}: ModalProps) => {
  return (
    <>
      {isOpen && (
        <>
          <ModalBackground
            zIndex={zIndex - 1}
            onClick={() => setIsOpen(false)}
          />
          <ModalContainer
            width={width}
            height={height}
            zIndex={zIndex}
            style={{ ...customStyle }}
          >
            {children}
          </ModalContainer>
        </>
      )}
    </>
  );
};

export default Modal;
