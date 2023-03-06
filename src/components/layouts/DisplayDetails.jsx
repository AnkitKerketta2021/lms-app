import React from "react";
import LayoutNavbar from "./LayoutNavbar";
import SideNavbar from "./SideNavbar";
import BodyContent from "./BodyContent";

const DisplayDetails = () => {
  return (
    <div>
      <LayoutNavbar />
      <SideNavbar />
      <BodyContent />
    </div>
  );
};

export default DisplayDetails;
