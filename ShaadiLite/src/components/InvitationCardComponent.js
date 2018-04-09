/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { Card, CardItem } from "native-base";
import ProfileImage from "./Profile/ProfileImage";

export default class InvitationCardComponent extends Component {
  render() {

    const placeholder = this.props.profile.picture.large ? this.props.profile.picture.large : "https://icons.iconarchive.com/icons/paomedia/small-n-flat/72/profile-icon.png"
    

    var icon = require("../assets/request_off.png");
    return (
      <Card>
        <CardItem cardBody>
        <View style={{ flexDirection: "column",alignSelf: "center" }}>
        <View style={[styles.imageCircle]}>
                <ProfileImage
                  imageLink={placeholder}
                  gender="female"
                />
              </View>
            
            <View>
            <Text id="name" style={styles.nameTextStyle}>
            {this.props.profile.name.first +
                  " " +
                  this.props.profile.name.last}
                  </Text>
            </View>
            <View>
            <Text id="info1" >
            28 yrs, 5'3",Hindi,Rajput
                  </Text>
            </View>
            <View>
            <Text id="info2" >
            Other,India,Bachelors - Science
                  </Text>
            </View>
            <View>
            <Text id="info3" >
           Software Developer / Programmer
                  </Text>
            </View>
            <View style={{ flexDirection: "row",alignSelf: "center" }}>
            <Image
          source={require('/home/seemai/React_Training/react-native-prototype/ShaadiLite/assets/cta/decline_invite.png')}
        />
        <Image
        source={require('/home/seemai/React_Training/react-native-prototype/ShaadiLite/assets/cta/send_interest.png')}
      />
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
    height: 60,
    width: 60,
    alignSelf: "center",
    borderRadius: 25
  }
});
