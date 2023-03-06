import React from "react";
import { Button } from "react-bootstrap";

const LoginButton = ({ btn_Value, btn_onClick, custom_style }) => {
  return (
    <>
      <Button
        className=""
        variant="secondary"
        style={custom_style}
        onClick={btn_onClick}
      >
        {btn_Value}
      </Button>
    </>
  );
};

export default LoginButton;
