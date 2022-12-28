import { useEffect } from "react";

export interface UsePreventScrollProps {
  isPreventScroll: boolean;
}

/**
 * @description
 * 스크롤 막는 것을 쉽게 사용할 수 있게 해주는 hook입니다.
 */

export const usePreventScroll = ({
  isPreventScroll,
}: UsePreventScrollProps) => {
  useEffect(() => {
    if (isPreventScroll) {
      document.body.style.cssText = `
                  position: fixed; 
                  top: -${window.scrollY}px;
                  overflow-y: scroll;
                  width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      };
    }
  }, [isPreventScroll]);
};
