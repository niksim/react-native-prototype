/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import InboxContainer from "./InboxContainer";
import TabBarIconView from "../components/TabBarIconView";
import { Constants } from "expo";

export default class Inbox extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => (
      <TabBarIconView tabIndex={2} focused={focused} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <InboxContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#C2185B",
    height: Constants.statusBarHeight
  },
  container: {
    flex: 1
  }
});
