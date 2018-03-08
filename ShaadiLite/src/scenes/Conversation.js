import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "native-base";
import ChatHeader from "../components/Chat/ChatHeaders";
import RecentActiveToggle from "../components/Chat/RecentActiveToggle";

export default class Conversation extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-heart" style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <ChatHeader />
        <RecentActiveToggle />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cd486b"
  }
});
