import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Layout, Text } from "@ui-kitten/components";
import AppContext from "../../core/context/appContext";

const BlogItem = ({
  navigation,
  bid,
  author,
  title,
  summary,
  content,
  date,
  importance,
}) => {
  const state = useContext(AppContext);
  const { onPostSelected } = state;

  const Header = (props) => (
    <View {...props}>
      <View>
        <Text category="h6">{title}</Text>
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

  const handlePostSelected = (
    bid,
    title,
    summary,
    content,
    importance,
    date
  ) => {
    onPostSelected(bid, title, summary, content, importance, date);
    navigation.navigate("BlogSelected");
  };

  return (
    <Card
      status={importance ? importance : null}
      header={Header}
      footer={Footer}
      style={styles.card}
      onPress={() =>
        handlePostSelected(bid, title, summary, content, importance, date)
      }
    >
      <Layout style={styles.summary} level="3">
        <Text>{summary}</Text>
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
