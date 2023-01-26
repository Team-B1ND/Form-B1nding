import React from "react";
import { FlexContainer } from "./style";
import { FlexProps } from "./types";

export const Flex = ({
  children,
  gap = 0,
  justify = "start",
  align = "start",
  direction = "row",
  customStyle,
}: FlexProps) => {
  return (
    <FlexContainer
      style={{
        ...customStyle,
        gap,
        justifyContent: justify,
        alignItems: align,
        flexDirection: direction,
      }}
    >
      {children}
    </FlexContainer>
  );
};
