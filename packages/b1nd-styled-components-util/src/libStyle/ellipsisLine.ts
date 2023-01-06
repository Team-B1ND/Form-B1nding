import { css, FlattenSimpleInterpolation } from "styled-components";

export const ellipsisLine = (
  lineClamp: number
): FlattenSimpleInterpolation => css`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -ms-word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${lineClamp};
`;
