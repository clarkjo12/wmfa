import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import LoginForm from "../components/LoginForm";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <LoginForm />
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
