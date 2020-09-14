import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Card, Layout, Text } from "@ui-kitten/components";

const BlogPost = ({
  navigation,
  author,
  title,
  content,
  blogImage,
  date,
  importance,
}) => {
  const Header = (props) => (
    <View {...props}>
      <View>
        <Text category="h4">{title}</Text>
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
      <Layout level="3">
        {blogImage && (
          <Image
            style={{
              width: "100%",
              height: 250,
              marginBottom: 20,
            }}
            source={{ uri: blogImage.downloadLink }}
          />
        )}

        <Text category="s1" style={styles.text}>
          {content}
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
  text: {
    padding: 5,
  },
});

export default BlogPost;
