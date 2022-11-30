import React from "react";
import HeroSection from "../components/HeroSection";
import Mentors from "../components/Mentors";
import AboutUs from "../components/AboutUs";

const LandingPage = () => {
  return (
    <>
      <HeroSection id="home" />
      <AboutUs id="aboutus" />
      <Mentors id="mentors" />
    </>
  );
};

export default LandingPage;
