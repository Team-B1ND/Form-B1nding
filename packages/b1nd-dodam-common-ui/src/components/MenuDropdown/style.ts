import styled from "styled-components";
import {
  MenuDropdownHeight,
  MenuDropdownSizeType,
  MenuDropdownWidth,
} from "./types";

export const MenuDropdownContainer = styled.div<{
  sizeType: MenuDropdownSizeType;
}>`
  width: ${({ sizeType }) => MenuDropdownWidth[sizeType]}px;
  height: ${({ sizeType }) => MenuDropdownHeight[sizeType]}px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MenuDropdownIcon = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const MenuDropdownItemWrap = styled.div<{
  sizeType: MenuDropdownSizeType;
}>`
  width: 90px;
  display: flex;
  flex-direction: column;
  position: absolute;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #d2d2d2;
  top: ${({ sizeType }) => MenuDropdownHeight[sizeType]}px;
  left: ${({ sizeType }) => MenuDropdownWidth[sizeType] / 2}px;
`;

export const MenuDropdownItem = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #d2d2d2;
  color: black;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;

  &:last-child {
    border-bottom: 0px;
  }

  &:hover {
    filter: brightness(95%);
  }
`;
