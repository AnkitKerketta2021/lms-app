import { Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import { GlobalState } from "../../context/GlobalState";
import "./SideNavbar.css";

const SideNavbar = () => {
  const { adminData } = useContext(GlobalState);
  const [activeSideBar, setactiveSideBar] = useState(adminData[0].name);
  const [toggleSideNavbar, settoggleSideNavbar] = useState(0);

  const handleActiveSidebar = (event, val) => {
    let activeItem = adminData.indexOf(val);
    settoggleSideNavbar(activeItem)
  };

  return (
    <div
      className="sideNav"
      style={{ width: "72px", paddingTop: "50px", position: "fixed" }}
    >
      <Grid
        columns={1}
        style={{
          display: "flex",
          justifyContent: "start",
          flexBasis: "start",
          flexDirection: "column",
          padding: "10px",
          height: "90vh",
        }}
        gridRow={6}
        rowGap={2}
      >
        {adminData.map((val, index) => (
          <Grid
            className={index=== toggleSideNavbar?"sidebarIconActive":"sidebarIcon"}
            onClick={(event) => handleActiveSidebar(event, val)}
            item
            sx={2}
            key={val}
            style={{ textAlign: "center", fontSize: "12px", color: "#086288" }}
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
