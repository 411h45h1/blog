export default (state, { type, payload }) => {
  switch (type) {
    case "CHANGE_THEME":
      return {
        ...state,
        lightTheme: !state.lightTheme,
      };

    case "LOGGED_IN":
      return {
        ...state,
        loggedIn: true,
        uid: payload.uid,
      };

    case "NOT_LOGGED_IN":
      return {
        ...state,
        loggedIn: false,
      };

    case "LOG_OUT":
      return {
        ...state,
        loggedIn: false,
        uid: null,
        blogEntries: null,
        blogLoaded: false,
      };

    case "LOAD_BLOG_ENTRIES":
      return {
        ...state,
        blogEntries: payload,
        blogLoaded: true,
      };

    case "BLOG_SELECTED":
      return {
        ...state,
        blogSelected: payload,
      };

    default:
      return state;
  }
};
