import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Card, CardItem, Left, Body, Thumbnail } from "native-base";

export default class SentItemCardComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: this.props.profile.picture.thumbnail }} />
            <Body>
              <Text>CRUSADER12</Text>
              <Text note>April 15, 2016</Text>
              <Text note>April 15, 2016</Text>
              <Text note>April 15, 2016</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
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
