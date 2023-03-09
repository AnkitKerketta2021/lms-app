import { Button } from "@mui/material";
import React, { useContext } from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import SearchIcon from "@mui/icons-material/Search";
import { GlobalState } from "../../context/GlobalState";


const TableNavbar = () => {
    const {adminSideMenuBar} = useContext(GlobalState);
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
        {adminSideMenuBar} list
      </b>
      <div
        style={{ display: "flex", justifyContent: "space-around", gap: "25px" }}>
      <SearchIcon style={{color:'#B7B8BA', position:'relative', left:'55px', top:'7px',fontSize:'20px'}}/>
    <input style={inputStyle} type="text"/>
      {adminSideMenuBar==="Request"?"": <Button variant="contained" color="warning" style={{fontSize:'12px',textTransform:'capitalize'}}><AddRoundedIcon></AddRoundedIcon> New {adminSideMenuBar}</Button>}
      </div>
    </div>
  );
};

export default TableNavbar;
