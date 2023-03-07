export default (state, action) => {
  switch (action.type) {
    case "SIDE_NAV": {
      return {
        adminData: [...state.adminData],
        adminSideMenuBar: action.payload,
      };
    }

    default:
      return state;
  }
};
