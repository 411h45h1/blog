import React, { useState, useContext } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import AppContext from "../../core/context/appContext";
import { Layout, Card, Button, Toggle, Text } from "@ui-kitten/components";

import { logoutUser } from "../api/auth";
import BlogItem from "../components/BlogItem";

const HomeScreen = () => {
  const state = useContext(AppContext);
  const { blogEntries, themeSwitch } = state;
  const [checked, setChecked] = useState(false);

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
        <Button size="small" onPress={() => logoutUser()} status="control">
          Log Out
        </Button>
        <Text category="s1">Blog</Text>
        <Toggle checked={checked} onChange={onCheckedChange} />
      </Layout>

      <Layout style={styles.blogSection} level="4">
        <ScrollView>
          <View style={styles.container}>
            {blogEntries &&
              blogEntries.map((i, k) => (
                <BlogItem
                  key={k}
                  title={i.title}
                  importance={i.importance}
                  summary={i.summary}
                  date={i.date}
                />
              ))}
          </View>
        </ScrollView>
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
  blogSection: {
    flex: 7,
    margin: 10,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 20,
  },
});

export default HomeScreen;
