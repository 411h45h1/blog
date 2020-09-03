import React from "react";

import { Layout, Spinner } from "@ui-kitten/components";

import firebase from "../../core/firebase";
import "firebase/auth";

const AuthLoadingScreen = ({ navigation }) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is logged in
      navigation.navigate("HomeScreen");
    } else {
      // User is not logged in
      navigation.navigate("OnBoard");
    }
  });

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Spinner />
    </Layout>
  );
};

export default AuthLoadingScreen;
