import React from "react";
import { AboutContent, AboutImg, Section, Feature, Features } from "./style";

const AboutUs = ({ id }) => {
  return (
    <Section id={id}>
      <AboutImg>
        <img src="/aboutimg.png" alt="About Image" />
      </AboutImg>

      <AboutContent>
        <h1>About Us</h1>
        <h3>Get to Know the program Better</h3>

        <Features>
          <Feature>
            <h4>Prizes</h4>
            <p>
              Do Better than yourself each day and get a chance to redeem
              Prizes.
            </p>
          </Feature>

          <Feature>
            <h4>Specific Guidance</h4>
            <p>
              The curriculum as well as mentors will be specifically targeted
              catering to your interests.
            </p>
          </Feature>

          <Feature>
            <h4>Say NO to malpractices</h4>
            <p>
              With our revamped rating system malpractices are a thing of the
              past
            </p>
          </Feature>

          <Feature>
            <h4>Meet Alumni from everywhere</h4>
            <p>
              Now you are no more restricted to alumni of your college only.
            </p>
          </Feature>
        </Features>
      </AboutContent>
    </Section>
  );
};

export default AboutUs;
