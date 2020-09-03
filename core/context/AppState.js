import React, { useReducer, useCallback, useEffect } from "react";

//context
import AppContext from "./appContext";
import appReducer from "./appReducer";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

import { logoutUser } from "../../src/api/auth";
import { getBlogEntries, deleteNote } from "../../src/api/blog";

const AppState = (props) => {
  const initialState = {
    loggedIn: null,
    uid: null,
    lightTheme: true,
    blogEntries: null,
    blogLoaded: null,
  };
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { loggedIn, uid, blogLoaded } = state;

  const themeSwitch = () => dispatch({ type: "CHANGE_THEME" });

  const loadBlog = () =>
    getBlogEntries().then((res) =>
      dispatch({
        type: "LOAD_BLOG_ENTRIES",
        payload: res.sort((a, b) => (a.bid < b.bid ? 1 : -1)),
      })
    );

  const onBlogEntries = useCallback(loadBlog, [uid]);

  useEffect(() => {
    authCheck();

    if (!blogLoaded && loggedIn) {
      onBlogEntries();
    }
  }, [loggedIn, onBlogEntries, blogLoaded]);

  const authCheck = () =>
    firebase.auth().onAuthStateChanged((user) =>
      user
        ? dispatch({
            type: "LOGGED_IN",
            payload: {
              uid: user.uid,
              username: firebase.auth().currentUser.displayName,
            },
          })
        : dispatch({ type: "NOT_LOGGED_IN" })
    );

  const onLogout = () => {
    logoutUser();
    dispatch({ type: "LOG_OUT" });
  };

  const removeBlog = (uid, bid) =>
    deleteBlogEntries(uid, bid).then(() => onBlogEntries());

  return (
    <AppContext.Provider
      value={{
        uid: state.uid,
        loggedIn: state.loggedIn,
        lightTheme: state.lightTheme,
        blogEntries: state.blogEntries,
        blogLoaded: state.blogLoaded,
        themeSwitch,
        onLogout,
        loadBlog,
        removeBlog,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
