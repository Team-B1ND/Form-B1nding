import React from "react";
import { ErrorLogButtonContainer, ErrorLogButtonWrap } from "./style";
import { ErrorLogButtonProps } from "./types";

const ErrorLogButton = ({ onClick, customStyle }: ErrorLogButtonProps) => {
  return (
    <ErrorLogButtonContainer>
      <ErrorLogButtonWrap>
        <span>에러 제보하기</span>
      </ErrorLogButtonWrap>
    </ErrorLogButtonContainer>
  );
};

export default ErrorLogButton;
