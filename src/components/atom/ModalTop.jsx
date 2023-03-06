import React from "react";
import CloseIcon from "@mui/icons-material/Close";
const ModalTop = ({ textContent,onClick }) => {
  return (
    <div className="d-flex" style={{ justifyContent: "space-between" }}>
      <h4 style={{ color: "#086288", fontSize: "18px", marginLeft: "-10px" }}>
        {textContent}
      </h4>
      <div type="button" onClick={onClick} style={{ marginRight: "-10px", color: "#777777" }}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default ModalTop;
