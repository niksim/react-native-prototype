import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform
} from "react-native";
import { Icon } from "native-base";
import TabBarIconView from "../components/TabBarIconView";

import ScreenHeader from "../common/components/ScreenHeader";
import MyShaadiProfileCell from "../components/Profile/MyShaadiProfileCell";


import SHCarouselProfile from "../components/SHCarouselProfile";
import OptionAndSettings from "../components/OptionsSettings";

import CopyRightView from "../components/CopyRightsView";
import ProfileFaceCell from "../components/Profile/ProfileFaceCell";

import { settingsMenuData ,profileCompletenessData} from "../Data/SettingMenuData";
 
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
        {Platform.OS === "android" && Platform.Version >= 20 ? (
          <View style={styles.statusBar} />
        ) : null}
        <ScreenHeader title="MyShaadi" />
        <ScrollView>
          <View style={styles.profileFaceContainer}>
            <ProfileFaceCell/>
          </View>
          <OptionAndSettings header='Complete your Profile' data={profileCompletenessData}/>

          {/* Custom Button Class With Global Active Index Object*/}
 
          <View style={styles.carouselContainer}>
            <SHCarouselProfile section="Premium Matches" />
          </View>
          <View style={styles.carouselContainer}>
             <SHCarouselProfile section="Recently Joined" />
          </View>
          <View style={styles.carouselContainer}>
            <SHCarouselProfile section="Recently Visitors" />
          </View>
          <OptionAndSettings header='Options and Settings' data={settingsMenuData}/>
          <CopyRightView />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#99363a",
    height: Constants.statusBarHeight
  },
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  carouselContainer:{
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#e2e2e2"
  },
  profileFaceContainer :{
    backgroundColor: "gray",
    flex:1
  }
});
