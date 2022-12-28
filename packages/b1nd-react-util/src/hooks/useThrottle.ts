import throttle from "lodash/throttle";
import { useMemo, useEffect } from "react";

export interface UseThrottleProps<F extends (...args: any[]) => any> {
  callback: F;
  wait: number;
  options?: Parameters<typeof throttle>[2];
}

/**
 * @description
 * lodash/throttle 를 쉽게 사용할 수 있는 hook 입니다.
 */
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
      // 컴포넌트가 언마운트 될 때 쓰로틀을 취소해줘요.
      throttledCallback.cancel();
    };
  }, [throttledCallback]);

  return throttledCallback;
};
