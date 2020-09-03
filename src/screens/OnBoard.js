import React from "react";

import { Layout, Button } from "@ui-kitten/components";

const OnBoard = ({ navigation }) => {
  return (
    <Layout
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Button onPress={() => navigation.navigate("LoginScreen")}>Login</Button>
      <Button onPress={() => navigation.navigate("RegisterScreen")}>
        Sign Up
      </Button>
    </Layout>
  );
};

export default OnBoard;
