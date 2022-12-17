import React from "react";
import { DarkModeButtonContainer, DarkModeButtonWrap } from "./style";

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  customStyle?: React.CSSProperties;
  isDark: boolean;
}

export const DarkmodeButton = ({ onClick, customStyle, isDark }: Props) => {
  return (
    <DarkModeButtonContainer
      onClick={onClick}
      isDark={isDark}
      style={{ ...customStyle }}
    >
      <DarkModeButtonWrap>
        <span>{isDark ? "라이트" : "다크"} 모드로 보기</span>
      </DarkModeButtonWrap>
    </DarkModeButtonContainer>
  );
};
