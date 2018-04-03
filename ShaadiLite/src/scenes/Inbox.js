/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

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
        {Platform.OS === "android" && Platform.Version >= 20 ? (
          <View style={styles.statusBar} />
        ) : null}
        <InboxContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#99363a",
    height: Constants.statusBarHeight
  },
  container: {
    flex: 1
  }
});
