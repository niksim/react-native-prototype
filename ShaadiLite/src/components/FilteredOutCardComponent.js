/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { Card, CardItem } from "native-base";

export default class FilteredOutCardComponent extends Component {
  render() {
    var icon = require("../assets/request_off.png");
    return (
      <Card>
        <CardItem cardBody>
          <View style={styles.profileInfoStyle}>
            <Image
              style={{
                width: null,
                flex: 1,
                height: 200
              }}
              source={{
                uri: this.props.profile.picture.large
              }}
            />
            <Text style={styles.connectTextStyle}>
              "Hello, I found your profile to be interesting and would like to
              connect with you...
              <Text style={styles.readMoreStyle}>Read More</Text>"
            </Text>
          </View>
        </CardItem>
        <CardItem>
          <View style={styles.Maincontainer}>
            <View style={styles.TextInputContainerStyle}>
              <TextInput
                placeholder="Write him a message ..."
                underlineColorAndroid="transparent"
                style={styles.TextInputStyleClass}
              />
              <Image style={[styles.image]} source={icon} />
            </View>
          </View>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  Maincontainer: {
    flexDirection: "row",
    flex: 1
  },
  connectTextStyle: {
    backgroundColor: "#F1F1F2",
    fontSize: 12,
    color: "#72727D",
    textAlign: "center"
  },
  separatorStyle: {
    backgroundColor: "#F1F1F2",
    width: 2,
    height: 35
  },
  profileInfoStyle: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5
  },
  readMoreStyle: {
    color: "#03BBD5"
  },
  TextInputContainerStyle: {
    backgroundColor: "#F1F1F2",
    borderColor: "#e2e2e2",
    borderWidth: 2,
    width: "70%",
    borderRadius: 5,
    flexDirection: "row"
  },
  TextInputStyleClass: {
    textAlign: "left",
    height: 30,
    paddingLeft: 10,
    flex: 1
  },
  image: {
    height: 28,
    width: 28,
    alignSelf: "center",
    resizeMode: "center"
  }
});
