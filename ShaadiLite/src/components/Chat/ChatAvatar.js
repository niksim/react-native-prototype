import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class ChatAvatar extends React.Component {
  constructor(props) {
    super(props);
  }

  getPlaceHolderImage = () => {
    var icon =
      this.props.profile.gender == 'female'
        ? require('../../assets/Silhouette_Female.png')
        : require('../../assets/Silhouette_Male.png');
    return icon;
  };

  getChatStatusImage = () => {
    var icon =
      this.props.profile.gender == 'female'
        ? require('../../assets/chatStatusIdle.png')
        : require('../../assets/chatStatusOnline.png');
    return icon;
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          defaultSource={this.getPlaceHolderImage()}
          source={{ uri: this.props.profile.picture.thumbnail }}
        />
        <Image
          style={{
            marginLeft: 37,
            marginTop: 37,
            height: 13,
            width: 13,
            backgroundColor: 'white',
            borderRadius: 6
          }}
          source={this.getChatStatusImage()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    marginLeft: 10,
    marginTop: 10
  },
  image: {
    flex: 1,
    height: 50,
    width: 50,
    borderRadius: 25,
    position: 'absolute'
  }
});
