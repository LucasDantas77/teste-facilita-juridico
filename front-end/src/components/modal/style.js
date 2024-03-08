import styled from "styled-components";

export const BackgroundDiv = styled.div`
  width: 100%;
  height: 1550px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const DivContainer = styled.div`
  width: 80%;
  max-width: 369px;
  height: 350px;
  display: flex;
  margin: 0 auto;
  margin-top: 7rem;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  border-radius: 8px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ul {
    display: flex;
    gap: 15px;
    width: 100%;
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: 1px solid #fff;

      h3 {
        color: #000;
        font-size: 17px;
        margin: 5px 0 5px 0;
      }
    }
  }
`;

export const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  width: 86.5%;

  padding: 10px 17px;
  border-radius: 3.20867px;

  p {
    font-weight: 700;
    font-size: 11.2304px;
    line-height: 19px;
    color: #f8f9fa;
  }

  button {
    background-color: #fff;
    border: none;
    color: #373737;
    padding: 5px;
  }
`;
