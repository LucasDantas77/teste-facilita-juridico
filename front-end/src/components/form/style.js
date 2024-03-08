import styled from "styled-components";

export const DivForm = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 85%;
    max-width: 450px;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 5px;
    margin-top: 140px;
  }

  label {
    font-weight: 400;
    font-size: 14px;
    color: #000;
    background-color: #fff;
  }

  input {
    width: 92%;
    max-width: 900px;
    padding: 8px;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    background-color: #d3d3d3;
  }

  span {
    width: 100%;
    max-width: 310px;
    color: red;
    background-color: #fff;
  }

  button {
    width: 100%;
    max-width: 310px;
    padding: 8px;
    background-color: #d3d3d3;
    border-radius: 4px;
    border: 1.2182px solid var(--color-primary);
    color: #373737;
    margin-top: 20px;
  }
`;
