import React from "react";
import { Section, RegisterButton } from "./style";
import { PopupButton } from "@typeform/embed-react";

const Register = ({ id }) => {
  return (
    <Section id={id}>
      <h1>Register</h1>
      <h3>Don't Have an Account. Register Now to get connected.</h3>
      <div className="button-container">
        <PopupButton
          id="NHmoPJg8"
          style={{
            fontSize: 20,
            backgroundColor: "#0d272b",
            borderRadius: "100px",
            paddding: "1em 3em",
            color: "#f7f7f7",
            overflow: "hidden",
          }}
          className="my-button"
        >
          <RegisterButton>Students</RegisterButton>
        </PopupButton>
        <PopupButton
          id="NHmoPJg8"
          style={{
            fontSize: 20,
            backgroundColor: "#0d272b",
            borderRadius: "100px",
            paddding: "1em 3em",
            color: "#f7f7f7",
            overflow: "hidden",
          }}
          className="my-button"
        >
          <RegisterButton>Mentors</RegisterButton>
        </PopupButton>
      </div>
    </Section>
  );
};

export default Register;
