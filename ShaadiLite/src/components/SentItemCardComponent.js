import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Card, CardItem, Left, Body, Thumbnail } from "native-base";
import { Icon } from "react-native-elements";

export default class SentItemCardComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Left style={styles.leftStyle}>
            <Thumbnail source={{ uri: this.props.profile.picture.thumbnail }} />
            <Body>
              <Text style={styles.nameTextStyle}>
                {this.props.profile.name.first +
                  " " +
                  this.props.profile.name.last}
              </Text>
              <Text note>25yrs, 6' 1''</Text>
              <Text note>
                {"from " +
                  this.props.profile.location.city +
                  ", " +
                  this.props.profile.location.state}
              </Text>
              <Text style={styles.connectTextStyle}>
                "Hello, I found your profile to be interesting and would like to
                connect with you...
                <Text style={styles.readMoreStyle}>Read More</Text>"
              </Text>
              <View style={styles.sentSinceStyle}>
                <Icon name="schedule" color="#72727D" size={12} />
                <Text style={styles.timeStyle}> 26 Mar</Text>
              </View>
            </Body>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  timeStyle: {
    fontSize: 12,
    color: "#72727D",
    textAlign: "center"
  },
  sentSinceStyle: {
    paddingTop: 10,
    flexDirection: "row"
  },
  leftStyle: {
    alignItems: "flex-start"
  },
  connectTextStyle: {
    fontSize: 12,
    color: "#72727D",
    textAlign: "center",
    paddingTop: 10
  },
  readMoreStyle: {
    color: "#03BBD5"
  },
  nameTextStyle: {
    fontWeight: "bold",
    fontSize: 16
  },
  container: {
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: "blue"
  },
  image: {
    flex: 1,
    height: 50,
    width: 50,
    borderRadius: 25,
    position: "absolute"
  }
});
