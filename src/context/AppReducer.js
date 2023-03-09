export default (state, action) => {
  switch (action.type) {
    case "SIDE_NAV": {
      return {
        adminSideBarData: [...state.adminSideBarData],
        batchData: [...state.batchData],
        requestData: [...state.requestData],
        mentorData: [...state.mentorData],
        adminSideMenuBar: action.payload,
      };
    }

    default:
      return state;
  }
};
