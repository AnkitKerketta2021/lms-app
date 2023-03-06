import { TextField } from "@mui/material";
import React, { useState } from "react";

const TextArea = ({
  placeHolder,
  onChange,
  textFieldCustomStyle,
  label,
  labelStyle,
}) => {
  const [inputValidation, setInputValidation] = useState(false);
  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          // margin: "auto",
        }}
      >
        <label style={labelStyle}>{label}</label>
        <TextField
          helperText={inputValidation ? "Please Provide a valid reason" : ""}
          multiline
          style={textFieldCustomStyle}
          onChange={{ onChange }}
          id="outlined-basic"
          label={placeHolder}
          variant="outlined"
        />
      </div>
    </>
  );
};

export default TextArea;
