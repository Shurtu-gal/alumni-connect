import React from "react";
import { Section, HeroContent, HeroImg } from "./style";

const HeroSection = ({ id }) => {
  return (
    <Section id={id}>
      <HeroContent>
        <h1>
          <span>Learn,</span>
        </h1>
        <h1>
          While you <span>Earn</span>
        </h1>
        <h3>Connecting students today for a better future tomorrow</h3>
      </HeroContent>
      <HeroImg>
        <img src="/heroimg.jpg" alt="Hero Image" />
      </HeroImg>
    </Section>
  );
};

export default HeroSection;
