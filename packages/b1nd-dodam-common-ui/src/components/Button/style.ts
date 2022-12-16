import styled from "styled-components";
import { ButtonPadding, ButtonSizeType ,ButtonHeight} from "./types";

export const ButtonContainer = styled.button<{sizeType : ButtonSizeType}>`
    height : ${(props) => ButtonHeight[props.sizeType]}px;
    padding: 0px ${(props) => ButtonPadding[props.sizeType]}px; 
`