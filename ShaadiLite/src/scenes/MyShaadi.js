import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';
import TabBarIconView from '../components/TabBarIconView';

export default class MyShaadi extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => (
      <TabBarIconView tabIndex={0} focused={focused} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>MyShaadi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fccc63',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#bc2a8d',
    fontSize: 50,
    opacity: 0.6
  }
});
