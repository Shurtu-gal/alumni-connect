import styled from "styled-components";

export const Section = styled.div`
  background-color: var(--background-secondary);
  width: 100%;
  padding: 4em 6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1{
    color = var(--text-color-primary);
  }

  h3{
    color = var(--text-color-secondary);
    margin-bottom: 2em;
  }

  .button-container{
    display: flex;
    gap: 2.5em;
  }
`;

export const RegisterButton = styled.p`
  padding: 0.8em 3em;
  background-color: var(--background-tertiary);
`;
