import styled from "styled-components";

export const SectionPage = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    width: 100%;
    margin: 0 auto;
    flex-direction: row;
    margin-top: 50px;
    gap: 20px;
    overflow-x: scroll;
    margin-left: 10px;
  
    li {
      border: 1px solid #fff;
      width: 80%;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      gap: 5px;
      max-width: 300px;
      align-items: center;
      text-align: center;
      padding: 5px;
      border-radius: 8px;
      h3 {
        color: #000;
        background-color: #fff;
      }
      p {
        width: 250px;
        color: #000;
        background-color: #fff;
      }
    }
    @media (min-width: 768px) {
      overflow: hidden;
      flex-wrap: wrap;
    }
  }
`;
