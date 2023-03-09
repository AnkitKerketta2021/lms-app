import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import ReusableButton from "../../atom/ReusableButton";
import TextArea from "../../atom/TextArea";
import "./AdminModal.css";
import ModalTop from "../../atom/ModalTop";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#fff",
  border: "none",
  overflow: "hidden",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};
const btnStyle = {
  background: "red !important",
  float: "right",
};

const AdminModal = ({
  header,
  onSubmit,
  onClose,
  setrequestApproveOrReject,
}) => {
  const [open, setOpen] = useState(true);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setrequestApproveOrReject(false);
  };

  const handleSubmit = () => {
    handleClose();
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 600,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <ModalTop onClick={handleClose} textContent={"Add new mentor"} />
            <hr style={{ scale: "119%" }} />
            <div style={{ textAlign: "center" }}>
              <TextArea
                labelStyle={{
                  marginLeft: "-28%",
                  color: "#707070",
                  width: "500px",
                }}
                label={"Reason"}
                customStyle={{
                  width: "16px",
                  textAlign: "center",
                }}
                placeHolder={""}
              />
            </div>
            <hr style={{ scale: "119%" }} />
            <div style={btnStyle}>
              <ReusableButton onClick={handleSubmit} btn_value={"submit"} />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AdminModal;
