import React, { useState, useContext } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import AppContext from "../../core/context/appContext";
import { Layout, Card, Button, Toggle, Text } from "@ui-kitten/components";

import { logoutUser } from "../api/auth";

import BlogItem from "../components/BlogItem";

const HomeScreen = ({ navigation }) => {
  const state = useContext(AppContext);
  const { blogEntries, themeSwitch, lightTheme } = state;

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
        <Button size="small" onPress={() => logoutUser()} status="basic">
          Log Out
        </Button>
        <Text category="h1" style={{}}>
          Blog
        </Text>
        <Toggle checked={!lightTheme} onChange={() => themeSwitch()} />
      </Layout>

      <Layout style={styles.blogSection} level="4">
        <ScrollView>
          <View style={styles.container}>
            {blogEntries &&
              blogEntries.map((i, k) => (
                <BlogItem
                  key={k}
                  navigation={navigation}
                  bid={i.bid}
                  title={i.title}
                  summary={i.summary}
                  content={i.content}
                  importance={i.importance}
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
