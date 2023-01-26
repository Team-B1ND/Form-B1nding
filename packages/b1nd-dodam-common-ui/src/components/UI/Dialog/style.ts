import styled from "styled-components";

export const DialogBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 50%;
  top: 0px;
  left: 0px;
  position: absolute;
`;

export const DialogContainer = styled.div<{ width: number }>`
  width: ${({ width }) => width}px;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const DialogTitleText = styled.h1`
  width: 100%;
  font-size: 30px;
  color: black;
  font-weight: bold;
  text-align: center;
  margin: 0px;
`;

export const DialogContentText = styled.p`
  width: 100%;
  text-align: center;
  color: black;
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 15px;
  line-height: 20px;
  word-break: keep-all;
`;

export const DialogButtonsContainr = styled.div<{ mainColor: string }>`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    min-width: 100px;
    height: 45px;
    color: white;
    border: 0px;
    border-radius: 20px;
    font-size: 18px;
    cursor: pointer;
  }

  .submit {
    background-color: ${({ mainColor }) => mainColor};
  }

  .cancel {
    background-color: white;
    color: ${({ mainColor }) => mainColor};

    &:hover {
      filter: brightness(85%);
    }
  }

  .error {
    background-color: #de5257;
  }
`;
