import { css, keyframes } from "styled-components";

const skeleton = keyframes`
    0% {
      background-color: rgba(182, 182, 182, 0.1);
    }
    50% {
      background-color: rgba(182, 182, 182, 0.25);
    }
    100% {
      background-color: rgba(182, 182, 182, 0.1);
    }
`;

export const skeletonAnimtaion = css`
  animation: ${skeleton} 1s infinite ease-in-out;
`;
