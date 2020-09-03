import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Layout, Text } from "@ui-kitten/components";

const BlogPost = ({
  navigation,
  bid,
  author,
  title,
  summary,
  content,
  date,
  importance,
}) => {
  const Header = (props) => (
    <View {...props}>
      <View>
        <Text category="h1">{title}</Text>
      </View>
    </View>
  );

  const Footer = (props) => (
    <View {...props}>
      <Text category="s1" style={{ alignSelf: "flex-start" }}>
        {author}
      </Text>
      <Text category="s1" style={{ alignSelf: "flex-end" }}>
        {date}
      </Text>
    </View>
  );

  return (
    <Card
      status={importance}
      header={Header}
      footer={Footer}
      style={styles.card}
    >
      <Layout style={styles.summary} level="3">
        <Text category="s1">{content}</Text>
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

export default BlogPost;
