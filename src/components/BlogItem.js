import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Layout, Text } from "@ui-kitten/components";

const BlogItem = () => {
  const Header = (props) => (
    <View {...props}>
      <View>
        <Text category="h6">Title</Text>
      </View>
    </View>
  );

  const Footer = (props) => (
    <View {...props}>
      <Text category="s1" style={{ alignSelf: "flex-end" }}>
        Date
      </Text>
    </View>
  );

  return (
    <Card style={styles.card} status="primary" header={Header} footer={Footer}>
      <Layout style={styles.summary} level="4">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </Text>
      </Layout>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    width: "100%",
  },
  summary: {
    padding: 10,
    alignItems: "flex-start",
    borderRadius: 10,
  },
});

export default BlogItem;
