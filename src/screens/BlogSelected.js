import React, { useContext } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import AppContext from "../../core/context/appContext";
import { Layout, Icon, Toggle } from "@ui-kitten/components";
import { CommonActions } from "@react-navigation/native";

import BlogPost from "../components/BlogPost";

const BlogSelected = ({ navigation }) => {
  const state = useContext(AppContext);
  const { blogSelected } = state;

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
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 25,
        }}
      >
        <Icon
          style={styles.returnIcon}
          fill="#8F9BB3"
          name="arrow-back"
          onPress={() => navigation.dispatch(CommonActions.goBack())}
        />
      </Layout>

      <Layout style={styles.blogSection} level="4">
        <ScrollView>
          <View style={styles.container}>
            {blogSelected && (
              <BlogPost
                content={blogSelected.content}
                title={blogSelected.title}
                importance={blogSelected.importance}
                date={blogSelected.date}
                blogImage={blogSelected.blogImage}
              />
            )}
          </View>
        </ScrollView>
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

  blogSection: {
    flex: 7,
    margin: 10,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 20,
  },
});

export default BlogSelected;
