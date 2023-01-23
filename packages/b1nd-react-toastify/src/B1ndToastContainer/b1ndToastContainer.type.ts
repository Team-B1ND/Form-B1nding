import { ReactNode } from "react";
import { ToastContainerProps } from "react-toastify";

export interface B1ndToastContainerProps extends ToastContainerProps {
  children: ReactNode;
}
