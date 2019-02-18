import React, { Component } from "react";
import { TextInput, Text, Button } from "react-native";
import { TextButton, RaisedTextButton } from "react-native-material-buttons";
import styled from "styled-components";
//import GoogButton from "../components/GGButton";
import WMFAtext from "../assets/images/LogoTextUser.png";
import WMFAlogo from "../assets/images/OrangeLogo.png";

const MommaDiv = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserInput = styled.TextInput`
  width: 50%;
  border: 1px solid;
  border-color: rgba(100, 100, 100, 0.27);
  border-radius: 3px;
  margin-top: 13px;
  font-size: 14px;
  padding: 6px;
`;

const LogoText = styled.Image`
  height: 50px;
  width: 250px;
  margin-top: 18px;
  margin-bottom: 80px;
`;

const Logo = styled.Image`
  height: 125px;
  width: 125px;
  margin-top: 90px;
`;

const LoginBelow = styled.View`
  padding-bottom: 2px;
  border-bottom-color: black;
  border-bottom-width: 1;
  margin-bottom: 3px;
`;

const Submit = styled.View`
  margin-top: 30px;
`;

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
  }

  testFunc() {
    console.log("ok");
  }

  render() {
    return (
      <MommaDiv>
        <Logo source={WMFAlogo} />
        <LogoText source={WMFAtext} />
        <LoginBelow>
          <Text>Login Below</Text>
        </LoginBelow>
        <UserInput value="Username" />
        <UserInput value="Password" />
        <Submit>
          <RaisedTextButton title="Submit" color="lightblue" />
        </Submit>
      </MommaDiv>
    );
  }
}
