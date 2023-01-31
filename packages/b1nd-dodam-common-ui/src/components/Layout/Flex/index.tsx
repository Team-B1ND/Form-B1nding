import React from "react";
import { FlexContainer } from "./style";
import { FlexProps } from "./types";

export const Flex = ({
  children,
  gap,
  justify,
  align,
  direction,
  customStyle,
}: FlexProps) => {
  return (
    <FlexContainer
      style={{
        ...customStyle,
      }}
      justify={justify}
      align={align}
      gap={gap}
      direction={direction}
    >
      {children}
    </FlexContainer>
  );
};
