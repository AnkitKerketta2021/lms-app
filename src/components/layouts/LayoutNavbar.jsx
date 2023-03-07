import { Autocomplete, Button, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import logo from "../../static/images/new_Logo.png";
import "./LayoutNavbar.css";

const LayoutNavbar = () => {
  return (
    <>
      <Grid
        container
        style={{
          border: "1px solid #F5F5F5",
          position: "fixed",
          width:"100%",
          top: "1px",
          boxShadow: "0 2px 4px #F5F5F5",
        }}
        className="pt-1"
        spacing={3}
      >
        <Grid item xs={4}>
          <img
            className="p-1"
            style={{ width: "188px", height: "60px"}}
            src={logo}
            alt="Logo"
          />
        </Grid>
        <Grid item xs={4}>
          <Autocomplete
            id="search_top"
            freeSolo
            renderInput={(params) => (
              <div  id="searchbar" className="d-flex mt-2 mb-3" style={{ overflow: "hidden" }}>
                <SearchIcon
                  style={{
                    position: "relative",
                    right: "-35px",
                    top: "15px",
                    color: "#BCBCCB",
                  }}
                />
                <input
                // id="searchbar"
                  className="ps-2"
                  style={{
                    border: "none",
                    borderRadius: "2px",
                    background: "#f5f5f7",
                    width: "100%",
                    height: "3em",
                  }}
                  placeholder="Search Mentor / Employee"
                />
              </div>
            )}
          />
        </Grid>
        <Grid className="pe-5 mt-3" style={{ textAlign: "end" }} item xs={4}>
          <Button style={{textTransform:'capitalize',color:'#086288'}} variant="outlined">Logout</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default LayoutNavbar;
