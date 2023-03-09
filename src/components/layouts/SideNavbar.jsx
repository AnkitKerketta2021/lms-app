import { Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import { GlobalState } from "../../context/GlobalState";
import "./SideNavbar.css";

const SideNavbar = () => {
  const { adminSideBarData, selectAdminSideMenuBar } =
    useContext(GlobalState);
  const [toggleSideNavbar, settoggleSideNavbar] = useState(0);

  const handleActiveSidebar = (event, val) => {
    let activeItem = adminSideBarData.indexOf(val);
    settoggleSideNavbar(activeItem);
    selectAdminSideMenuBar(val.name);
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
        {adminSideBarData.map((val, index) => (
          <Grid
            className={
              index === toggleSideNavbar ? "sidebarIconActive" : "sidebarIcon"
            }
            onClick={(event) => handleActiveSidebar(event, val)}
            item
            sx={2}
            key={index+1}
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
