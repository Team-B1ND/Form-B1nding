import { useRef, useEffect } from "react";

export interface UseTimeoutProps {
  callback: () => void;
  delay: number;
}

/**
 * @description
 * window.setTimeout 을 쉽게 사용할 수 있는 hook 입니다.
 */
export const useTimeout = ({ callback, delay = 0 }: UseTimeoutProps) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const handleTimeout = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    const id = window.setTimeout(handleTimeout, delay);

    return () => {
      window.clearTimeout(id);
    };
  }, [delay]);
};
