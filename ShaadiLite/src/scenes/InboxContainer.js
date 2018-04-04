import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "native-base";
import { InboxTabItems } from "./RootNavigator/InboxTabNavigation";
import { Constants } from "expo";

export default class InboxContainer extends React.Component {
  render() {
    return <InboxTabItems />;
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#C2185B",
    height: Constants.statusBarHeight
  },
  container: {
    flex: 1,
    backgroundColor: "#e95950",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "yellow",
    fontSize: 50,
    opacity: 0.6
  }
});
