import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import Batch from "@mui/icons-material/Groups";
import Mentor from "@mui/icons-material/Person";
import Request from "@mui/icons-material/PersonAdd";

//? initial State
const initialState = {
  employeeData: [],
  mentorData: [],
  adminData: [
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
  

  return (
    <GlobalState.Provider
      value={{
        employeeData: state.employeeData,
        mentorData: state.mentorData,
        adminData: state.adminData,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
