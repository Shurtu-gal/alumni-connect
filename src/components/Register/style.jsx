import styled from "styled-components";

export const Section = styled.div`
  background-color: var(--background-secondary);
  width: 100%;
  padding: 4em 0em;
  text-align: center;
  color: var(--text-color-primary);


  h1{
    color = var(--text-color-primary) !important;
    margin-bottom: 1em;
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

export const Students = styled.div`
  background-color: var(--background-primary);
  width: auto;
`;

export const Divider = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
`;

export const Contain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
