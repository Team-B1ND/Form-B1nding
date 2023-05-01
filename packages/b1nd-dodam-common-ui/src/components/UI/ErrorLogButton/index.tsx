import React from "react";
import { ErrorLogButtonContainer, ErrorLogButtonWrap } from "./style";
import { ErrorLogButtonProps } from "./types";
import { AiOutlineQuestionCircle } from "react-icons/ai";
const ErrorLogButton = ({ onClick, customStyle }: ErrorLogButtonProps) => {
  return (
    <ErrorLogButtonContainer onClick={onClick} style={{ ...customStyle }}>
      <ErrorLogButtonWrap>
        <AiOutlineQuestionCircle size={15} color={"white"} />
        <span>고객센터</span>
      </ErrorLogButtonWrap>
    </ErrorLogButtonContainer>
  );
};

export default ErrorLogButton;
