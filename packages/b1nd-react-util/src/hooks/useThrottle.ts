import throttle from "lodash/throttle";
import { useMemo, useEffect } from "react";

export interface UseThrottleProps<F extends (...args: any[]) => any> {
  callback: F;
  wait: number;
  options?: Parameters<typeof throttle>[2];
}

export const useThrottle = <F extends (...args: any[]) => any>({
  callback,
  wait,
  options,
}: UseThrottleProps<F>) => {
  const throttledCallback = useMemo(() => {
    return throttle(callback, wait, options);
  }, [callback, wait, options]);

  useEffect(() => {
    return () => {
      throttledCallback.cancel();
    };
  }, [throttledCallback]);

  return throttledCallback;
};
