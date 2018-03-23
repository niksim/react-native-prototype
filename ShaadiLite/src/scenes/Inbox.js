import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';
import TabBarIconView from '../components/TabBarIconView';

export default class Inbox extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => (
      <TabBarIconView tabIndex={2} focused={focused} />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Inbox</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e95950',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'yellow',
    fontSize: 50,
    opacity: 0.6
  }
});
