import React, { useState } from "react";
import {
  MenuDropdownContainer,
  MenuDropdownIcon,
  MenuDropdownItem,
  MenuDropdownItemWrap,
} from "./style";
import { MenuDropdownProps } from "./types";
import MenuDropdownPeriodIcon from "../../assets/icon/MenuDropdown/MenuDropdownPeriodIcon.png";

export const MenuDropdown = ({
  sizeType,
  onDelete,
  onModify,
}: MenuDropdownProps) => {
  const [close, setClose] = useState(true);

  return (
    <MenuDropdownContainer
      sizeType={sizeType}
      onClick={() => setClose((prev) => !prev)}
    >
      <MenuDropdownIcon src={MenuDropdownPeriodIcon} />
      {!close && (
        <MenuDropdownItemWrap sizeType={sizeType}>
          <MenuDropdownItem onClick={() => onModify()}>수정</MenuDropdownItem>
          <MenuDropdownItem onClick={() => onDelete()}>삭제</MenuDropdownItem>
        </MenuDropdownItemWrap>
      )}
    </MenuDropdownContainer>
  );
};
