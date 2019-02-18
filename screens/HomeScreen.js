import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser } from "expo";
import Map from "../components/Map";
import styled from "styled-components";

import BlueText from "../assets/images/BlueLogo.png";

const MommaDiv = styled.View``;

const Header = styled.View`
  height: 10%;
  background-color: #38b6ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MapDiv = styled.View`
  height: 100%;
`;

const LogoText = styled.Image`
  height: 40px;
  width: 190px;
  margin-top: 12px;
`;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <MommaDiv>
        <Header>
          <LogoText source={BlueText} />
        </Header>
        <MapDiv>
          <Map />
        </MapDiv>
      </MommaDiv>
    );
  }
}
