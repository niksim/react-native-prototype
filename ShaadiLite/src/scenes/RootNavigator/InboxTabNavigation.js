import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Platform } from "react-native";

import InvitationScreen from "../../components/Inbox/Invitations";
import Accepted from "../../components/Inbox/Accepted";
import FilteredOut from "../../components/Inbox/FilteredOut";
import Deleted from "../../components/Inbox/Deleted";
import Sent from "../../components/Inbox/Sent";

export const InboxTabItems = TabNavigator(
  {
    Invitations: {
      screen: InvitationScreen
    },
    Accepted: {
      screen: Accepted
    },
    Filtered_Out: {
      screen: FilteredOut,
      navigationOptions: ({ navigation }) => ({
        title: `Filtered Out`
      })
    },
    Deleted: {
      screen: Deleted
    },
    Sent_Items: {
      screen: Sent,
      navigationOptions: ({ navigation }) => ({
        title: `Sent Items`
      })
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "top",
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: { backgroundColor: "#ff585c" }
        })
      },
      scrollEnabled: true,
      activeTintColor: "white",
      inactiveTintColor: "grey",
      showLabel: true,
      showIcon: false
    }
  }
);
