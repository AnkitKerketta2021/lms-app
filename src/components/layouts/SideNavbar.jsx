import { Grid } from "@mui/material";
import React from "react";
import "./SideNavbar.css";
import Batch from "@mui/icons-material/Groups";
import Mentor from "@mui/icons-material/Person";
import Request from "@mui/icons-material/PersonAdd";
let adminSidebar = [
  { name: "Batch", icon: <Batch /> },
  { name: "Mentor", icon: <Mentor /> },
  { name: "Request", icon: <Request /> },
];

const SideNavbar = () => {
  return (
    <div
      className="sideNav"
      style={{ width: "72px", position: "fixed", zIndex: "-1", top: "78px",}}
    >
      <Grid
        columns={1}
        style={{
          display: "flex",
          justifyContent: "start",
          flexBasis: "start",
          flexDirection: "column",
          padding: "10px",
          border: "1px solid #F5F5F5",
          height: "100vh",
        }}
        gridRow={6}
        rowGap={2}
        // spacing={1}
      >
        {adminSidebar.map((val, index) => (
          <Grid
            item
            sx={2}
            key={val}
            style={{ textAlign: "center", fontSize: "12px", color: "#086288" }}
            id="sidebarIcon"
          >
            {val.icon}
            {val.name}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SideNavbar;
