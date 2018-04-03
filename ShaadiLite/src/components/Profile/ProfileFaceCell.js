//import liraries
import React, { Component } from 'react';
import { View,StyleSheet,ImageBackground,} from 'react-native';
import MyShaadiProfileCell from "./MyShaadiProfileCell";
import ProfileImage from "./ProfileImage";
// create a component
class ProfileFaceCell extends Component {


    render() {
        return (
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
        );
    }
}


//make this component available to the app
export default ProfileFaceCell;

const styles = StyleSheet.create({
    profileCell: {
      backgroundColor:"red",
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 15,
      flex:.2
    },
    profileDetails: {
      paddingLeft: 15
    }
  });
  