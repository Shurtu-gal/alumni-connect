import styled from "styled-components";

export const Section = styled.div`
  background-color: var(--background-secondary);
  width: 100%;
  padding: 4em 6em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AboutContent = styled.div`
  flex: 1.5;
  padding: 4em;

  h1 {
    font-size: 4.2em;
    color: var(--text-color-primary);
  }

  h3 {
    font-size: 1.5em;
    color: var(--text-color-tertiary);
  }

  h4 {
    font-size: 1.6em;
    color: blue;
  }
`;

export const AboutImg = styled.div`
  flex: 1;
  min-height: 300px;
  min-width: 300px;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const Features = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
`;

export const Feature = styled.div`
  font-size: 1.4em;
  padding: 1em 0;

  h4 {
    font-weight: 500;
    margin-bottom: 0.5em;
  }
`;
