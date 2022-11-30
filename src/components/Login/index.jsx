import React from "react";
import { Section, RegisterSec, RegisterButton, LoginSec } from "./style";
import { PopupButton } from "@typeform/embed-react";

const Login = ({ id }) => {
  return (
    <Section id={id}>
      <RegisterSec>
        <h1>Register</h1>
        <h3>Don't Have an Account. Register Now to get connected.</h3>
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
          <RegisterButton>Register</RegisterButton>
        </PopupButton>
      </RegisterSec>
      <LoginSec>
        <h1>Register</h1>
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
          <RegisterButton>Register</RegisterButton>
        </PopupButton>
      </LoginSec>
    </Section>
  );
};

export default Login;
