import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import Batch from "@mui/icons-material/Groups";
import Mentor from "@mui/icons-material/Person";
import Request from "@mui/icons-material/PersonAdd";
import EditIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

//? initial State
const initialState = {
  employeeData: [],
  batchData: [
    {
      id: 1,
      batch_Id: "#154234653",
      batch_Name: "ABC",
      mentor_Name: "Kevin",
      technologies: ["Node & Express Js"],
      start_Date: "14 Mar 2023",
      end_Date: "14 April 2023",
      status: ["Inprogress"],
      action: null,
    },
    {
      id: 2,
      batch_Id: "#154671293",
      batch_Name: "XYZ",
      mentor_Name: "Jones",
      technologies: ["React Js"],
      start_Date: "21 Feb 2023",
      end_Date: "24 Mar 2023",
      status: ["Completed"],
      action: null,
    },
    {
      id: 3,
      batch_Id: "#154651626",
      batch_Name: "NSG",
      mentor_Name: "Mario",
      technologies: ["Angular"],
      start_Date: "04 Mar 2023",
      end_Date: "04 April 2023",
      status: ["In Progress"],
      action: null,
    },
  ],
  mentorData: [
    {
      id: 1,
      mentor_Name: "Kevin",
      employee_id: "#131729982",
      "e-mail_id": "kevin123@ElementInternals.com",
      skills: ["React", "Node & Express", "Mongo DB"],
      action: null,
    },
  ],
  requestData: [
    {
      id: 1,
      employee_Id: "#154234653",
      employee_Name: "Juned",
      YOP: "2021",
      Percentage: "85%",
      experience: "Fresher",
      contact_no: 9891212121,
      action: null,
    },
    {
      id: 2,
      employee_Id: "#154231772",
      employee_Name: "Kartik",
      YOP: "2020",
      Percentage: "81%",
      experience: "Fresher",
      contact_no: 9921909090,
      action: null,
    },
  ],
  adminSideBarData: [
    { name: "Batch", icon: <Batch /> },
    { name: "Mentor", icon: <Mentor /> },
    { name: "Request", icon: <Request /> },
  ],
  adminSideMenuBar: "Batch",
};

// ! const CreateContext
export const GlobalState = createContext(initialState);

// * Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // ! ACTIONS
  const selectAdminSideMenuBar = (selectedOption) => {
    dispatch({
      type: "SIDE_NAV",
      payload: selectedOption,
    });
  };

  return (
    <GlobalState.Provider
      value={{
        employeeData: state.employeeData,
        mentorData: state.mentorData,
        adminSideBarData: state.adminSideBarData,
        adminSideMenuBar: state.adminSideMenuBar,
        batchData: state.batchData,
        requestData: state.requestData,
        mentorData: state.mentorData,
        selectAdminSideMenuBar,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
