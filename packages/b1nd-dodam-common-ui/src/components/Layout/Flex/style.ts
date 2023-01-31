import styled from "styled-components";
import {
  FlexAlign,
  FlexAlignType,
  FlexDirection,
  FlexDirectionType,
  FlexJustify,
  FlexJustifyType,
} from "./types";

export const FlexContainer = styled.div<{
  gap: number | undefined;
  justify: FlexJustifyType | undefined;
  align: FlexAlignType | undefined;
  direction: FlexDirectionType | undefined;
}>`
  display: flex;
  gap: ${({ gap = 0 }) => gap}px;
  justify-content: ${({ justify = "start" }) => FlexJustify[justify]};
  align-items: ${({ align = "start" }) => FlexAlign[align]};
  flex-direction: ${({ direction = "row" }) => FlexDirection[direction]};
`;
