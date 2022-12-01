import React from "react";
import { Modal } from "./style";
import LoginForm from "./Login/LoginForm";
import { PropaneSharp } from "@mui/icons-material";

const Login = ({ id, onCancel }) => {
  return (
    <Modal id={id}>
      <LoginForm click={console.log("done")} />
    </Modal>
  );
};

export default Login;
