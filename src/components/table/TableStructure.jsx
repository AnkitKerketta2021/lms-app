import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { GlobalState } from "../../context/GlobalState";
import TableContent from "./TableContent";
import TableNavbar from "./TableNavbar";

const TableStructure = () => {
  const { adminSideMenuBar } = useContext(GlobalState);
  const spanStyle = {
    width: "1414px",
    height: "30px",
    color: "#333",
    position: "realative",
    zIndex: 10,
    top: "90px",
    marginLeft: "15px",
    fontSize: "14px",
  };
  const tableStyle = {
    width: "92%",
    height: "600px",
    position: "fixed",
    background: "#cccccc09",
    boxShadow: "3px 3px 7px #DAD9E0",
    marginTop: "66px",
    marginLeft: "50px",
    overflow: "hidden",
  };
  return (
    <Grid className="tableBg" style={{ maxWidth: 200 }}>
      <span style={spanStyle}>
        Home{" "}
        <b>
          {">"} {adminSideMenuBar}
        </b>
      </span>
      <div className="p-2" style={tableStyle}>
        <TableNavbar />
        <div className="mt-4" style={{scale:'101.5%'}}><TableContent /></div>
      </div>
    </Grid>
  );
};

export default TableStructure;
