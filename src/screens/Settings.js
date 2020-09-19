import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { CommonActions } from "@react-navigation/native";
import AppContext from "../../core/context/appContext";
import { Layout, Button, Toggle, Text, Icon } from "@ui-kitten/components";

import { logoutUser } from "../api/auth";

const Settings = ({ navigation }) => {
  const state = useContext(AppContext);
  const { themeSwitch, lightTheme } = state;

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
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 15,
        }}
      >
        <Icon
          style={styles.returnIcon}
          fill="#8F9BB3"
          name="arrow-back"
          onPress={() => navigation.dispatch(CommonActions.goBack())}
        />
        <Text category="h1">Settings.</Text>
        <Button size="small" onPress={() => logoutUser()} status="primary">
          Log Out
        </Button>
      </Layout>

      <Layout style={styles.SettingSection} level="4">
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
          }}
        >
          <View
            style={{
              marginTop: 5,
            }}
          >
            <Text category="h3">Theme</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              alignItems: "center",
            }}
          >
            <Toggle
              checked={!lightTheme}
              onChange={() => themeSwitch()}
              style={{ paddingRight: 5 }}
            />
            <Text category="c1">({lightTheme ? "light" : "dark"})</Text>
          </View>
        </View>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  returnIcon: {
    width: 32,
    height: 32,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: 15,
  },
  card: {
    margin: 5,
    width: "100%",
  },
  SettingSection: {
    flex: 5,
    margin: 10,
    padding: 20,
    borderRadius: 20,
  },
});

export default Settings;
