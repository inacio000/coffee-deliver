import styled from "styled-components";
import bg from "../../../src/assets/images/cofeimg.jpg"

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background: url(${bg}) no-repeat top center/cover;
`;

export const Main = styled.div`
  width: 1440px;
  height: 400px;

  @media (max-width: 720px) {
    height: 300px;
  }
  
  span {
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    padding: 0 1rem 0;

    h2 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.2rem;
    }

    @media (max-width: 720px) {
     width: 70%;

      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }
    }

    @media (max-width: 570px) {
      max-width: 70%;
      
      h2 {
        font-size: 1.6rem;
      }
    }

    @media (max-width: 500px) {
      max-width: 80%;

      h2 {
        font-size: 1.4rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }


`