import React from "react";
import { DarkModeButtonContainer, DarkModeButtonWrap } from "./style";
import { DarkmodeButtonProps } from "./types";

export const DarkmodeButton = ({
  onClick,
  customStyle,
  isDark,
}: DarkmodeButtonProps) => {
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
