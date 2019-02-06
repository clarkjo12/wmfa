import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Links"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text> yooooooo hoo!! </Text>
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#ffbd59"
  }
});
