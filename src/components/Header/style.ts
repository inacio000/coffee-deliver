import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  background: var(--background);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  
  /* .header-fixed {
    position: fixed;
  } */
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  max-width: 1440px;

  padding: 2rem 1rem;

  div {
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

export const Order = styled(Link)`
  background: var(--yellow-light);
  padding: 0.5rem;
  border-radius: 0.5rem;
  height: 100%;
  position: relative;

  span {
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    color: var(--background);
    position: absolute;
    top: 0;
    right: 0;
    margin: -0.5rem;
    background: var(--yellow-dark);
    border-radius: 50%;
    font-weight: 800;
    font-size: 0.75rem;
  }

  img {
    width: 1.5rem;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  color: var(--purple-dark);
  background: var(--purple-light);
  border-radius: 0.5rem;
  padding: 0.5rem;
  height: 100%;

  img {
    width: 1.5rem;
  }

  @media (max-width: 320px) {
    justify-content: center;

    p {
      display: none;
    }
  }
`;
