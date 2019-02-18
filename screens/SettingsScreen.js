import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

const MommaDiv = styled.View`
  background: #38b6ff;
  height: 100%;
`;

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <MommaDiv>
        <Text>okoko</Text>
      </MommaDiv>
    );
  }
}
