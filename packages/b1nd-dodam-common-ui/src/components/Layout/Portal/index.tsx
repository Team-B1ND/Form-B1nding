import ReactDOM from "react-dom";
import { PortalProps } from "./types";

export const Portal = ({ children, selector }: PortalProps) => {
  if (!children) {
    throw new Error("children are required");
  }

  const selectedDOM = document.querySelector(selector);

  return !!selectedDOM ? ReactDOM.createPortal(children, selectedDOM) : null;
};
