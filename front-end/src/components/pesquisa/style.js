import styled from "styled-components";

export const DivMain = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 110px;
  position: fixed;
  box-shadow: 0 7px 4px rgba(0, 0, 0, 0.1);
  top: 0;
  button {
    width: 20%;
    max-width: 100px;
    padding: 8px;
    background-color: #d3d3d3;
    color: #373737;
    border: none;
    border-radius: 8px;
    font-size: 11px;
    margin-top: 19px;
    height: 40px;
  }
`;

export const InputStyle = styled.input`
  &::placeholder {
    text-align: center;
    color: #373737;
  }
  width: 60%;
  max-width: 500px;
  padding: 15px;
  border-radius: 10px;
  background-color: #d3d3d3;
  margin-top: 20px;
  border: none;
  color: #373737;
`;
