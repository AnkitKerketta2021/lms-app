import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//? initial State
const initialState = {
  employeeData: [],
  mentorData: [],
  adminData: [],
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
