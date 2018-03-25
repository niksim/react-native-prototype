/* @flow */

import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { List, ListItem } from "react-native-elements";

import { settingsMenuData } from "../Data/SettingMenuData";

export default class OptionsAndSettings extends Component {
  render() {
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
          <Text>Options & Settings</Text>
        </View>
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={settingsMenuData}
            renderItem={({ item }) => (
              <ListItem
                title={`${item.value}`}
                containerStyle={{ borderBottomWidth: 0 }}
                leftIcon={{ name: getOptionImage(item.id) }}
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

getOptionImage = id => {
  var icon = "settings";
  // switch (id) {
  //   case 0:
  //     icon = "Pass icon here";
  //     break;
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
