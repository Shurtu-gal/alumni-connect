import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Mentors from "../components/Mentors";
import AboutUs from "../components/AboutUs";
import Login from "../components/Auth/index";
import { AltNavBar } from "../components";
import Backdrop from "../components/Backdrop";
import Register from "../components/Register";

const LandingPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const clickHandler = (event) => {
    event.preventDefault(); // Highly Important
    setModalIsOpen(true);
  };

  const cancelHandler = (event) => {
    event.preventDefault(); // Highly Important
    setModalIsOpen(false);
  };

  return (
    <>
      <AltNavBar click={clickHandler} />
      <HeroSection id="home" />
      <AboutUs id="aboutus" />
      <Mentors id="mentors" />
      <Register id="register" />
      {modalIsOpen && <Login onCancel={cancelHandler} />}
      {modalIsOpen && <Backdrop onCancel={cancelHandler} />}
    </>
  );
};

export default LandingPage;
