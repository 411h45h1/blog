import React, { useContext } from "react";

import AppContext from "../../core/context/appContext";
import { Layout, Button, Toggle, Text } from "@ui-kitten/components";

import { logoutUser } from "../api/auth";

const HomeScreen = () => {
  const state = useContext(AppContext);
  const { themeSwitch } = state;
  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
    themeSwitch();
  };

  return (
    <Layout
      style={{
        flex: 8,
      }}
    >
      <Layout
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Button onPress={() => logoutUser()} status="control">
          Log Out
        </Button>
        <Text category="s1">HomeScreen</Text>
        <Toggle checked={checked} onChange={onCheckedChange} />
      </Layout>

      <Layout
        style={{
          flex: 7,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Layout>
    </Layout>
  );
};

export default HomeScreen;
