import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Card, CardItem } from "native-base";

export default class ChatAvatar extends React.Component {
  constructor(props) {
    super(props);
  }

  getPlaceHolderImage = () => {
    var icon =
      this.props.profile.gender == "female"
        ? require("../../assets/Silhouette_Female.png")
        : require("../../assets/Silhouette_Male.png");
    return icon;
  };

  getChatStatusImage = () => {
    var icon =
      this.props.profile.gender == "female"
        ? require("../../assets/chatStatusIdle.png")
        : require("../../assets/chatStatusOnline.png");
    return icon;
  };

  render() {
    return (
      <Card>
        <CardItem cardBody>
          <View style={styles.container}>
            <Image
              style={styles.image}
              defaultSource={this.getPlaceHolderImage()}
              source={{ uri: this.props.profile.picture.thumbnail }}
            />
          </View>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 10,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    height: 50,
    width: 50,
    borderRadius: 25,
    position: "absolute"
  }
});
