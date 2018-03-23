import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class TabBarIconView extends Component {
  constructor(props) {
    super(props);
  }

  getTabbarImage = () => {
    var icon = require('../assets/conversations_off.png');
    switch (this.props.tabIndex) {
      case 0:
        icon = require('../assets/myshaadi_off.png');
        break;
      case 1:
        icon = require('../assets/matches_off.png');
        break;
      case 2:
        icon = require('../assets/request_off.png');
        break;
      case 3:
        icon = require('../assets/conversations_off.png');
        break;
      default:
        break;
    }
    return icon;
  };

  getTabbarTitle = () => {
    var title = '';
    switch (this.props.tabIndex) {
      case 0:
        title = 'My Shaadi';
        break;
      case 1:
        title = 'Matches';
        break;
      case 2:
        title = 'Inbox';
        break;
      case 3:
        title = 'Conversation';
        break;
      default:
        break;
    }
    return title;
  };

  render() {
    return (
      <View style={styles.tabItemContainter}>
        <Image
          style={[
            styles.image,
            { tintColor: this.props.focused ? '#f85842' : '#72727D' }
          ]}
          source={this.getTabbarImage()}
        />
        <Text
          style={{
            fontSize: 12,
            color: this.props.focused ? '#f85842' : '#72727D'
          }}
        >
          {this.getTabbarTitle()}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabItemContainter: {
    flex: 1
  },
  image: {
    height: 28,
    width: 28,
    alignSelf: 'center',
    resizeMode: 'center'
  }
});
