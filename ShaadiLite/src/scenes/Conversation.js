import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'native-base';
import ChatHeader from '../components/Chat/ChatHeaders';
import RecentActiveToggle from '../components/Chat/RecentActiveToggle';

export default class Conversation extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        style={styles.image}
        source={require('../assets/conversations_off.png')}
      />
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
    backgroundColor: '#cd486b'
  },
  image: {
    flex: 1
  }
});
