import React from "react";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: number;
  zIndex?: number;
  customStyle?: React.CSSProperties;
}

export interface DialogTitleProps {
  children: React.ReactNode;
}

export interface DialogContentProps {
  children: React.ReactNode;
}

export interface DialogButtonsProps {
  children: React.ReactNode;
  mainColor?: string;
}
