import { Autocomplete, Box, Button, Grid } from "@mui/material";
import React from "react";
import SideNavbar from "../layouts/SideNavbar";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../static/images/new_Logo.png";

import "./Layout1.css";
import TableStructure from "./../table/TableStructure";

const employeeOptions = [
  {
    id: 1,
    label: "Employee 1",
  },
  {
    id: 1,
    label: "Employee 2",
  },
  {
    id: 1,
    label: "Employee 3",
  },
  {
    id: 1,
    label: "Employee 4",
  },
  {
    id: 1,
    label: "Employee 5",
  },
];

// ?=============== CSS ================
const boxShadow = {
  position: "fixed",
  background: "#fff",
  border: "2px solid #F5F5F5",
  boxShadow: "2px 0 4px #F5F5F5",
};

const searchIconStyle = {
  position: "relative",
  right: "-27px",
  fontSize: "1.2em",
  top: "8px",
  color: "#BCBCCB",
};

const inputStyle = {
  width: "600px",
  border: "none",
  background: "#f5f5f7",
  padding: "7px",
  borderRadius: "2px",
};
const buttonStyle = {
  textTransform: "capitalize",
  color: "#086288",
  width: "1em",
  height: "40px",
};
// ?=============== CSS ================

const Layout1 = () => {
  return (
    <Box id="layout1Container">
      <Box
        display={"grid"}
        style={boxShadow}
        gridTemplateColumns="repeat(12, 8.32svw)"
      >
        <Box gridColumn="span 2">
          <img
            className="p-1"
            style={{ width: "188px", height: "60px", margin: " 0" }}
            src={logo}
            alt="Logo"
          />
        </Box>
        <Box gridColumn="span 8">
          <div
            id="searchbar"
            className="d-flex mt-4 mb-3"
            style={{ width: "600px", margin: "auto" }}
          >
            <SearchIcon id="searchIcon" style={searchIconStyle} />
            <Autocomplete
              id="topSearchbar"
              style={{ width: "inherit" }}
              freeSolo
              options={employeeOptions.map((option) => option.label)}
              renderInput={(params) => (
                <input
                  style={inputStyle}
                  {...params}
                  placeholder="Search Mentor / Employee"
                />
              )}
            />
          </div>
        </Box>
        <Box
          gridColumn="span 2"
          display={"flex"}
          style={{ justifyContent: "end" }}
        >
          <Button className="mt-4 me-4" style={buttonStyle} variant="outlined">
            Logout
          </Button>
        </Box>
        <Box id="sideNavbar">
          <Grid container spacing={6}>
            <Grid item sx={2}>
              <SideNavbar />
            </Grid>
            <Grid item sx={11}>
              <TableStructure />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout1;
