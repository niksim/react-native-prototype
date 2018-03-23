import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'native-base';
import ChatHeader from '../components/Chat/ChatHeaders';
import RecentActiveToggle from '../components/Chat/RecentActiveToggle';
import TabBarIconView from '../components/TabBarIconView';
export default class Conversation extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => (
      <TabBarIconView tabIndex={3} focused={focused} />
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

{
  /* <View style={{ backgroundColor: "#f85842" }}>
          <Text
            style={{
              alignContent: "flex-end",
              height: 15,
              width: 15,
              borderRadius: 7.5,
              fontSize: 12,
              marginTop: 2,
              color: "white"
            }}
          >
            2
          </Text>
        </View> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cd486b'
  },
  tabItemContainter: {
    flex: 1
  },
  image: {
    height: 28,
    width: 28,
    alignSelf: 'center',
    resizeMode: 'contain'
  }
});
