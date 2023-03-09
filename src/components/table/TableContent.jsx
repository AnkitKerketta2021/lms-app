import React, { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GlobalState } from "../../context/GlobalState";
import EditIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import AdminModal from "../molecule/AdminModalReasonOfRejection/AdminModal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E9EEF7",
    color: theme.palette.common.black,
    fontWeight: 700,
    textTransform: "capitalize",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    background: "#fff",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: "none",
  },
}));

const actionButtonStyle1 = {
  marginLeft: "-15px",
  marginRight: "-15px",
  color: "#000",
};
const actionButtonStyle2 = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  scale: "70%",
};

export default function TableContent() {
  const { batchData, requestData, adminSideMenuBar, mentorData } =
    useContext(GlobalState);

  const [filterValue, setfilterValue] = useState(batchData);
  const [tableDatas, setTableDatas] = useState([]);
  const [requestApproveOrReject, setrequestApproveOrReject] = useState(false);
  let keys;

  useEffect(() => {
    adminSideMenuBar === "Batch"
      ? setfilterValue(batchData)
      : adminSideMenuBar == "Mentor"
      ? setfilterValue(mentorData)
      : setfilterValue(requestData);
  }, [adminSideMenuBar]);
  console.log("VALUE ", filterValue);

  for (let i in filterValue) {
    keys = Object.keys(filterValue[i]);
    tableDatas.push(Object.values(filterValue[i]));
  }

  return (
    <TableContainer className="" component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {keys.map((val, index) => (
              <StyledTableCell key={index} align="center">
                {val.match("_")
                  ? val.replace(/_/g, " ")
                  : val.match("id")
                  ? "No"
                  : val}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filterValue.map((val, ind) => (
            <StyledTableRow>
              {keys.map((value, index) => {
                return (
                  <StyledTableCell key={index} align="center">
                    {(value === "action" && adminSideMenuBar === "Batch") ||
                    (value === "action" && adminSideMenuBar === "Mentor") ? (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "10px",
                        }}
                      >
                        <Button style={actionButtonStyle1}>
                          <EditIcon />
                        </Button>
                        <Button style={actionButtonStyle1}>
                          <DeleteIcon />
                        </Button>
                      </div>
                    ) : value === "action" && adminSideMenuBar === "Request" ? (
                      <div className="btn" style={actionButtonStyle2}>
                        {requestApproveOrReject && <AdminModal setrequestApproveOrReject={setrequestApproveOrReject} />}
                        <Button
                          variant="contained"
                          color="success"
                        >
                          Approve
                        </Button>
                        <Button
                          onClick={() =>
                            setrequestApproveOrReject(!requestApproveOrReject)
                          }
                          variant="contained"
                          color="error"
                        >
                          Reject
                        </Button>
                      </div>
                    ) : (
                      val[value]
                    )}
                  </StyledTableCell>
                );
              })}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
