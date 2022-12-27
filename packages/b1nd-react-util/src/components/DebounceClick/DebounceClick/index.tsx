import debounce from "lodash/debounce";
import { Children, cloneElement, ReactElement } from "react";
import { useDebounce } from "../../../hooks";

interface Props {
  wait: Parameters<typeof debounce>[1];
  children: ReactElement;
  capture?: string;
}

export function DebounceClick({ capture = "onClick", children, wait }: Props) {
  const child = Children.only(children);
  const debouncedCallback = useDebounce({
    callback: (...args: any[]) => {
      if (child.props && typeof child.props[capture] === "function") {
        return child.props[capture](...args);
      }
    },
    wait: wait as number,
  });

  return cloneElement(child, {
    [capture]: debouncedCallback,
  });
}
