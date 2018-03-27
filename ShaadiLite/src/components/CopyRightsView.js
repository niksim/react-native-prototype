/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class CopyRightView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.termsStyle}>Terms and Conditions</Text>
        <Text style={styles.defaultTextStyle}>
          CopyRight © 1996-2018 Shaadi.com
        </Text>
        <Text style={styles.defaultTextStyle}>Version 5.4.2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F2",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
    paddingTop: 10,
    paddingBottom: 10
  },
  termsStyle: {
    textDecorationLine: "underline",
    fontSize: 10,
    color: "#72727D"
  },
  defaultTextStyle: {
    fontSize: 10,
    color: "#72727D"
  }
});
