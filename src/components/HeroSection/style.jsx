import styled from "styled-components";

export const Section = styled.div`
  background-color: var(--background-tertiary);
  height: 85vh;
  width: 100%;
  padding: 3em 6em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeroContent = styled.div`
  flex: 1.5;

  h1 {
    font-size: 4.2em;
  }

  h3 {
    font-size: 1.5em;
  }

  span {
    background-image: linear-gradient(90deg, #fe8dc6, #fed1c7);
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const HeroImg = styled.div`
  flex: 1;
  min-height: 300px;
  min-width: 300px;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
