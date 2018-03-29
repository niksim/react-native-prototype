import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Platform } from "react-native";

import MyShaadi from "../../../src/scenes/MyShaadi";
import Matches from "../../../src/scenes/Matches";
import Inbox from "../../../src/scenes/Inbox";
import Conversation from "../../../src/scenes/Conversation";

export const TabItems = TabNavigator(
  {
    MyShaadi: {
      screen: MyShaadi
    },
    Matches: {
      screen: Matches
    },
    Inbox: {
      screen: Inbox
    },
    Conversation: {
      screen: Conversation
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: { backgroundColor: "white" }
        })
      },
      activeTintColor: "crimson",
      inactiveTintColor: "grey",
      showLabel: false,
      showIcon: true
    }
  }
);
