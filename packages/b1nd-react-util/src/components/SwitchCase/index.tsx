interface Props<Case extends string> {
  /**
   * @description 케이스에 따라 맵핑된 컴포넌트 객체
   * e.g.) {
   *    caseBy={{
   *      a: <TypeA />,
   *      b: <TypeB />,
   *      c: <TypeC />
   *    }}
   * }
   */
  caseBy: Partial<Record<Case, JSX.Element | null>>;
  /**
   * @description 케이스들이 렌더링 여부를 제어해주는 값
   */
  value: Case;
  /**
   * @description 아무 케이스에도 해당 되지 않을 때 렌더링 해줄 컴포넌트
   */
  defaultComponent?: JSX.Element | null;
}

export const SwitchCase = <Case extends string>({
  value,
  caseBy,
  defaultComponent = null,
}: Props<Case>) => {
  if (value == null) {
    return defaultComponent;
  }

  return caseBy[value] ?? defaultComponent;
};
