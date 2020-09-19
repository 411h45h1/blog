import React, { useState, useContext, useCallback } from "react";
import { StyleSheet, ScrollView, RefreshControl, View } from "react-native";
import AppContext from "../../core/context/appContext";
import { Layout, Button, Icon, Text } from "@ui-kitten/components";

import { logoutUser } from "../api/auth";

import BlogItem from "../components/BlogItem";

const HomeScreen = ({ navigation }) => {
  const state = useContext(AppContext);
  const { blogEntries, themeSwitch, lightTheme, onBlogEntries } = state;

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    onBlogEntries().then(() => setRefreshing(false));
  }, []);

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
          marginHorizontal: 25,
        }}
      >
        <Text category="h1">Blog.</Text>

        <Icon
          style={styles.settingsIcon}
          fill="#8F9BB3"
          name="settings-outline"
          onPress={() => navigation.navigate("Settings")}
        />
      </Layout>

      <Layout style={styles.blogSection} level="4">
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={lightTheme ? "black" : "white"}
            />
          }
        >
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
                  blogImage={i.imageRef}
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
  settingsIcon: {
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
