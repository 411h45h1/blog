export default (state, { type, payload }) => {
  switch (type) {
    case "CHANGE_THEME":
      return {
        ...state,
        lightTheme: !state.lightTheme,
      };

    default:
      return state;
  }
};
