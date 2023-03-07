import { Button } from "@mui/material";
import React from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const selectedSideMenuOption = "Batch";

const TableNavbar = () => {
  const tableNavBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  };
  const inputStyle = {
    borderRadius:'2px',
    border:'none',
    padding:'5px',
    width:'300px',
    background:'#F4F5F8'
  }
  return (
    <div className="mt-2 me-3" id="tableNavbar" style={tableNavBarStyle}>
      <b style={{ color: "#FBAA21", fontSize: "14px" }}>
        {selectedSideMenuOption} list
      </b>
      <div
        style={{ display: "flex", justifyContent: "space-around", gap: "25px" }}
      >
    <input style={inputStyle} type="text"/>
       <Button variant="contained" color="warning" style={{fontSize:'12px'}}><AddRoundedIcon></AddRoundedIcon> New {selectedSideMenuOption}</Button>
      </div>
    </div>
  );
};

export default TableNavbar;
