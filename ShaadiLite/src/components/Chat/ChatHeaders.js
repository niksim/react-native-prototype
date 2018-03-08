import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, Left, Right, Body } from "native-base";
export default class ChatHeaders extends Component {
  render() {
    return (
      <Header style={{ backgroundColor: "#ff585c" }}>
        <Body>
          <Text style={{ fontSize: 17, color: "white" }}>Shaadi Chat</Text>
          <Text style={{ fontSize: 11, color: "white" }}>Online</Text>
        </Body>
      </Header>
    );
  }
}
