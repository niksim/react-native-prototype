/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { Card, CardItem } from "native-base";
import ProfileImage from "./Profile/ProfileImage";

export default class InvitationCardComponent extends Component {
  render() {
    const placeholder = this.props.profile.picture.large
      ? this.props.profile.picture.large
      : "https://icons.iconarchive.com/icons/paomedia/small-n-flat/72/profile-icon.png";

    var icon = require("../assets/request_off.png");
    return (
      <Card>
        <CardItem cardBody>
          <View
            style={{
              flexDirection: "column",
              flex: 1,
              alignSelf: "center",
              padding: 10
            }}
          >
            <View style={[styles.imageCircle]}>
              <ProfileImage imageLink={placeholder} gender="female" />
            </View>

            <View>
              <Text id="name" style={styles.nameTextStyle}>
                {this.props.profile.name.first +
                  " " +
                  this.props.profile.name.last}
              </Text>
            </View>
            <View style={styles.txtInfoStyle}>
              <Text id="info1">28 yrs, 5'3",Hindi,Rajput</Text>

              <Text id="info2">Other,India,Bachelors - Science</Text>

              <Text id="info3">Software Developer / Programmer</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: 15
              }}
            >
              <View style={{ flexDirection: "column" }}>
                <Image
                  style={styles.ctaButtonStyle}
                  source={require("../assets/decline_invite.png")}
                />
                <Text style={styles.ctabuttonTextStyle}>Decline</Text>
              </View>
              <View style={{ flexDirection: "column" }}>
                <Image
                  style={styles.ctaButtonStyle}
                  source={require("../assets/send_interest.png")}
                />
                <Text style={styles.ctabuttonTextStyle}>Accept</Text>
              </View>
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
  txtInfoStyle: {
    flexDirection: "column",
    alignItems: "center"
  },
  connectTextStyle: {
    backgroundColor: "#F1F1F2",
    fontSize: 12,
    color: "#72727D",
    textAlign: "center"
  },
  nameTextStyle: {
    color: "#00BCD5",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16
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
  },
  imageCircle: {
    height: null,
    width: 60,
    alignSelf: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 25
  },
  ctaButtonStyle: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20
  },
  ctabuttonTextStyle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10
  }
});