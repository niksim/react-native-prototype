import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView
} from "react-native";
import { Icon } from "native-base";
import TabBarIconView from "../components/TabBarIconView";

import ScreenHeader from "../common/components/ScreenHeader";
import MyShaadiProfileCell from "../components/Profile/MyShaadiProfileCell";
import ProfileImage from "../components/Profile/ProfileImage";

import SHCarouselProfile from "../components/SHCarouselProfile";
import OptionAndSettings from "../components/OptionsSettings";

import CopyRightView from "../components/CopyRightsView";

import { Constants } from "expo";

export default class MyShaadi extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => (
      <TabBarIconView tabIndex={0} focused={focused} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.statusBar} />
          <ScreenHeader title="MyShaadi" />
          <ImageBackground
            style={styles.profileCell}
            source={{
              uri:
                "https://img1.shaadi.com//2018/02/07/2SH21657426-a0cab7-female.jpg"
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View>
                <ProfileImage
                  imageLink="https://img1.shaadi.com//2018/02/07/2SH21657426-a0cab7-female.jpg"
                  gender="female"
                />
              </View>
              <View style={styles.profileDetails}>
                {/* Custom ProfileView Class to show basic info */}
                <MyShaadiProfileCell
                  accountType="Platinum Plus"
                  fullName="Poonam P"
                  valueShId="sh52654789"
                  expiryDate="30-Sep-18"
                />
                {/* Upgrade Now */}
              </View>
            </View>
          </ImageBackground>
          {/* Custom Button Class With Global Active Index Object*/}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              borderTopWidth: 1,
              borderTopColor: "#e2e2e2"
            }}
          >
            <SHCarouselProfile section="Premium Matches" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              borderTopWidth: 1,
              borderTopColor: "#e2e2e2"
            }}
          >
            <SHCarouselProfile section="Recently Joined" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              borderTopWidth: 1,
              borderTopColor: "#e2e2e2"
            }}
          >
            <SHCarouselProfile section="Recently Visitors" />
          </View>
          <OptionAndSettings />
          <CopyRightView />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#C2185B",
    height: Constants.statusBarHeight
  },
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  profileCell: {
    backgroundColor: "gray",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15
  },
  profileDetails: {
    paddingLeft: 15
  }
});
