import { Grid } from "@mui/material";
import { fontSize } from "@mui/system";
import React from "react";
import TableNavbar from "./TableNavbar";

const TableStructure = () => {

  const selectedSideMenuOption ="Batch"
  const spanStyle ={
    width: "1414px",
        height: "30px",
        color:'#333',
        position: "realative",
        zIndex:10,
        top:'90px',
        marginLeft:'15px',
        fontSize:'14px'
  }
  const tableStyle ={
        width:'92%',
        height: "600px",
        position: "fixed",
        background: "#cccccc09",
        boxShadow:'3px 3px 7px #DAD9E0',
        marginTop:'66px',
        marginLeft:'50px',
        overflow:'hidden'
  }
  return (
    <Grid className="tableBg" style={{ maxWidth:400}}>
    <span style={spanStyle}>Home <b>{">"} {selectedSideMenuOption}</b></span>
      <div
      className="p-2"
      style={tableStyle}
    >
    <TableNavbar/>
    <hr style={{scale:'102%',opacity:0.05}} />
    </div>
    </Grid>
  );
};

export default TableStructure;
