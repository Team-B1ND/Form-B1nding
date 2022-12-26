import debounce from "lodash/debounce";
import { useEffect, useMemo } from "react";

export const useDebounce = <F extends (...args: any[]) => any>(
  callback: F,
  wait: number,
  options: Parameters<typeof debounce>[2] = {}
) => {
  const debounced = useMemo(() => {
    return debounce(callback, wait, options);
  }, [callback, wait, options]);

  useEffect(() => {
    return () => debounced.cancel();
  }, [debounced]);

  return debounced;
};