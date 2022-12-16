import React from "react"
import { ButtonContainer } from "./style"
import { ButtonSizeType } from "./types"

interface Props {
    sizeType : ButtonSizeType
    children : React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({sizeType, children, onClick} : Props) => {
    return <ButtonContainer sizeType={sizeType} onClick={onClick}>
        {children}
    </ButtonContainer>
}