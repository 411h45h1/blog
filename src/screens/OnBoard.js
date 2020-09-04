import React from "react";

import { Layout, Text, Button } from "@ui-kitten/components";

const OnBoard = ({ navigation }) => {
  return (
    <Layout
      style={{
        flex: 1,
      }}
    >
      <Layout
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text category="h1" style={{ fontSize: 120 }}>
          Blog.
        </Text>
      </Layout>
      <Layout
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <Button
          status="basic"
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Login
        </Button>
        <Button
          status="basic"
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          Register
        </Button>
      </Layout>
    </Layout>
  );
};

export default OnBoard;
