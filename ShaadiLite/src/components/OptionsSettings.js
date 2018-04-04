/* @flow */

import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { List, ListItem } from "react-native-elements";

import { settingsMenuData } from "../Data/SettingMenuData";
import MyShaadiProfileCell from "./Profile/MyShaadiProfileCell";
import Icon from 'react-native-vector-icons/Ionicons';
import Image from 'react-native'
//import { settings } from "cluster";
export default class OptionsAndSettings extends Component {
  render() {

     

    if(this.props.data.length > 0){

    
    return (
      <View style={styles.container}>
        <View
          style={{
            paddingLeft: 15,
            paddingRight: 15,
            height: 30,
            backgroundColor: "#F1F1F2",
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "stretch"
          }}
        >
          <Text>{this.props.header}</Text>
        </View>
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={this.props.data}
            renderItem={({ item }) => (
              <ListItem  titleNumberOfLines ={2}  style ={MyShaadiProfileCell.shIdCell}

             // avatar= {require('../assets/101.png')} avatarStyle={{borderRadius:0, height:20, width:20 }}
        
                title={`${item.value}` } style ={MyShaadiProfileCell.shIdCell}
                containerStyle={{ borderBottomWidth: 0 }}
                leftIcon = {{name:getOptionImage(item.id)}}
               // leftIcon={ <Icon  name = {require("../assets/chat")} />}
                //avatar={getOptionImage(item.id)}
               // avatar = {{uri:getOptionImage(item.id)}}
              />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </List>
      </View>
    );
  }
  }
}

getOptionImage = id => {
  var icon = 'settings'
  // switch (id) {
  //     case 101:
  //     icon = require("../assets/chatStatusIdle.png")
  //     break;
  //     case 102:
  //     icon = require("../assets/chatStatusIdle.png")
  //   default:
  //     break;
  // }
  return icon;
};

renderSeparator = () => {
  return (
    <View
      style={{
        height: 2,
        backgroundColor: "#CED0CE"
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
