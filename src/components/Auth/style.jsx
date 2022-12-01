import styled from "styled-components";

export const Modal = styled.div`
  background-color: var(--background-primary);
  text-align: center;
  position: fixed;
  width: 30rem;
  top: 10vh;
  left: calc(50% - 15rem);
  z-index: 1;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.6);
  h1 {
    color: var(--text-color-primary);
  }
`;

export const RegisterButton = styled.p`
  padding: 0.8em 3em;
  background-color: var(--background-tertiary);
`;
