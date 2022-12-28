import debounce from "lodash/debounce";
import { useEffect, useMemo } from "react";

export interface UseDebounceProps<F extends (...args: any[]) => any> {
  callback: F;
  wait: number;
  options?: Parameters<typeof debounce>[2];
}

/**
 * @description
 * `lodash/debounce` 를 쉽게 사용할 수 있는 hook 입니다.
 */
export const useDebounce = <F extends (...args: any[]) => any>({
  callback,
  wait,
  options,
}: UseDebounceProps<F>) => {
  const debouncedCallback = useMemo(() => {
    return debounce(callback, wait, options);
  }, [callback, wait, options]);

  useEffect(() => {
    // 컴포넌트가 언마운트 될 때 디바운스를 취소해줘요.
    return () => debouncedCallback.cancel();
  }, [debouncedCallback]);

  return debouncedCallback;
};
