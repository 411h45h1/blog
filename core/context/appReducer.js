export default (state, { type, payload }) => {
  switch (type) {
    case "":
      return {
        ...state,
      };

    default:
      return state;
  }
};
