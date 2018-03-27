import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, Left, Right, Body } from "native-base";
export default class ScreenHeader extends Component {

  decideShowSubTitleOrNot = () => {
        if (this.props.subtitle){
            return (
              <View>
                  <Text style={{ fontSize: 17, color: "white" , fontWeight:"bold"}}>{this.props.title}</Text>
                  <Text style={{ fontSize: 11, color: "white" }}>{this.props.subtitle}</Text>
              </View>
            ) 
        }else {
            return (
              <View>
                  <Text style={{ fontSize: 17, color: "white" , fontWeight:"bold", alignItems:"center"}}>{this.props.title}</Text>
              </View>
            ) 
        }
    }

  render() {
    return (
      <Header style={{ backgroundColor: "#ff585c" }}>
        <Body>

          {this.decideShowSubTitleOrNot()}

        </Body>
      </Header>
    );
  }
}
