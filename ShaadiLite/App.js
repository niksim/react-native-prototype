import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TabItems} from "./src/scenes/RootNavigator/TabNavigation"

export default class App extends React.Component {
  render() {
    return (
      <TabItems/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
