import { useRef, useEffect } from "react";

export interface UseIntervalProps {
  callback: () => void;
  delay?: number;
}

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
