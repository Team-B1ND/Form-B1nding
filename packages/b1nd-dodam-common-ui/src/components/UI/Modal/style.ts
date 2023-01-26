import styled from "styled-components";

export const ModalBackground = styled.div<{ zIndex: number }>`
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 50%;
  top: 0px;
  left: 0px;
  position: absolute;
`;

export const ModalContainer = styled.div<{
  width: number;
  height: number;
  zIndex: number;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 20px;
  position: absolute;
`;
