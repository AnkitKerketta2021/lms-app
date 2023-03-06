import { Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
// import { blue } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#075575"),
  backgroundColor: "#075575",
  "&:hover": {
    backgroundColor: "#086288",
  },
}));

const ReusableButton = ({ btn_value, onClick }) => {
  return (
    <ColorButton variant="contained" onClick={onClick}>
      {btn_value}
    </ColorButton>
  );
};

export default ReusableButton;
