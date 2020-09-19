import React, { useState, useContext, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import AppContext from "../../core/context/appContext";
import { Layout, Button, Toggle, Text } from "@ui-kitten/components";

import { logoutUser } from "../api/auth";

const Settings = ({ navigation }) => {
  const state = useContext(AppContext);
  const { blogEntries, themeSwitch, lightTheme, onBlogEntries } = state;

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
        <Text category="h1">Settings.</Text>
        <Button size="small" onPress={() => logoutUser()} status="basic">
          Log Out
        </Button>
      </Layout>

      <Layout style={styles.SettingSection} level="4">
        <Text category="h1">Theme</Text>
        <Toggle checked={!lightTheme} onChange={() => themeSwitch()} />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
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
    flex: 7,
    margin: 10,
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 20,
  },
});

export default Settings;
