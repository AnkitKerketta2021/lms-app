import { Button } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import "./BodyContent.css"

const BodyContent = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        top: "56px",
        marginLeft: "40px",
        scale: "92% 82%",
        border: "2px solid #F5F5F5",
      }}
    >
      <div
        className="bodyContainer"
        style={{
          position: "relative",
        }}
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1050px auto auto" }}
        >
          <div>Title</div>
          <div id="insideSearchIcon" className="mt-3 p-1">
            <SearchIcon style={{position:'absolute',marginLeft:'5px',color:'#A1A1A3', fontSize:'20px',top:'25px'}} />
            <input style={{ width: "300px" }} placeholder="Search" />
          </div>
          <div style={{ flex: "end" }}>
            <Button  style={{textTransform:'capitalize'}} variant="contained" className="btn btn-warning mt-3" color="warning"  >
              <AddIcon />
              New Batch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
