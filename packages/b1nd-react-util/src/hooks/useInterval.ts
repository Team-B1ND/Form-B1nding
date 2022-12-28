import { useRef, useEffect } from "react";

export interface UseIntervalProps {
  callback: () => void;
  delay?: number;
}

/**
 * @description
 * window.setInterval 을 쉽게 사용할 수 있는 hook 입니다.
 */
export const useInterval = ({ callback, delay }: UseIntervalProps) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay === null) {
      return () => {
        return;
      };
    }

    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    const id = window.setInterval(tick, delay);
    return () => window.clearInterval(id);
  }, [delay]);
};
