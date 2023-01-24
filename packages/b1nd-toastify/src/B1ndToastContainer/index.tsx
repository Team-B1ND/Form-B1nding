import React from "react";
import { ToastContainer } from "react-toastify";
import { B1ndToastContainerProps } from "./b1ndToastContainer.type";

export const B1ndToastContainer = ({
  children,
  ...toastContainerProps
}: B1ndToastContainerProps) => {
  return <ToastContainer {...toastContainerProps}>{children}</ToastContainer>;
};
