import styled from "styled-components";

export const ErrorLogButtonContainer = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 45px 15px 45px 45px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  outline: none;
  border: 0px;
  display: flex;
  align-items: center;
  background-color: #337d5b;
`;

export const ErrorLogButtonWrap = styled.div`
  width: 100%;
  height: 17px;
  display: flex;
  justify-content: space-evenly;

  span {
    font-size: 0.8rem;
    color: white;
  }
`;
