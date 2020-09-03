import React, { useState, useContext } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import AppContext from "../../core/context/appContext";
import { Layout, Button, Toggle } from "@ui-kitten/components";

import BlogPost from "../components/BlogPost";

const BlogSelected = ({ navigation }) => {
  const state = useContext(AppContext);
  const { blogSelected, themeSwitch, lightTheme } = state;

  const goBack = () => navigation.navigate("HomeScreen");

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
        <Button size="small" status="basic" onPress={() => goBack()}>
          Return
        </Button>
        <Toggle checked={!lightTheme} onChange={() => themeSwitch()} />
      </Layout>

      <Layout style={styles.blogSection} level="4">
        <ScrollView>
          <View style={styles.container}>
            {blogSelected && (
              <BlogPost
                content={blogSelected.content}
                title={blogSelected.title}
                importance={blogSelected.importance}
                summary={blogSelected.summary}
                date={blogSelected.date}
              />
            )}
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

export default BlogSelected;
