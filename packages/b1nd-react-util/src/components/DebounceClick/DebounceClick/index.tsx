import debounce from "lodash/debounce";
import { Children, cloneElement, ReactElement } from "react";
import { useDebounce } from "../../../hooks";

interface Props {
  /**
   * @description 이벤트를 묶어서 한번에 보낼 시간으로 ms 단위
   * e.g.) 200ms 일 때, 200ms 안에 발생한 이벤트를 무시하고 마지막에 한번만 방출합니다.
   */
  wait: Parameters<typeof debounce>[1];
  /**
   * @description 디바운싱이 적용될 리액트 요소
   */
  children: ReactElement;
  /**
   * @default 'onClick'
   * @description 이벤트 prop 이름, onClick 외로 받을때 사용합니다.
   */
  capture?: string;
}

export const DebounceClick = ({
  capture = "onClick",
  children,
  wait,
}: Props) => {
  // children의 자식이 하나만 있는지 확인후 반환해요.
  const child = Children.only(children);

  // useDebounce를 사용하여 디바운스를 사용해요.
  const debouncedCallback = useDebounce({
    callback: (...args: any[]) => {
      //위에서 받은 리액트 요소에서 capture에 따른 이벤트 명의 함수를 디바운스 훅 콜백 부분에 전달해줘요
      if (child.props && typeof child.props[capture] === "function") {
        return child.props[capture](...args);
      }
    },
    wait: wait as number,
  });

  // 받은 리액트 요소를 그대로 클론해서 capture에 다른 이벤트명에 콜백이 적용된 디바운스 콜백을 넣어서 컴포넌트를 반환해요
  return cloneElement(child, {
    [capture]: debouncedCallback,
  });
};
