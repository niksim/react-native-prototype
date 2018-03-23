import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import { Icon } from 'native-base';
import TabBarIconView from '../components/TabBarIconView';
import ScreenHeader from "../common/components/ScreenHeader"
import MyShaadiProfileCell from "../components/Profile/MyShaadiProfileCell"
import ProfileImage from "../components/Profile/ProfileImage"

export default class MyShaadi extends React.Component {
  
  static navigationOptions = {
    tabBarIcon: ({ focused }) => (
      <TabBarIconView tabIndex={0} focused={focused} />
    )
  };

  render() {
    return (
        <View style={styles.container}>
                <ScreenHeader  title="MyShaadi"/>
                <View style={styles.profileCell}>
                        <View style={{flexDirection: 'row'}}>
                            <View>
                              <ProfileImage imageLink="https://img1.shaadi.com//2018/02/07/2SH21657426-a0cab7-female.jpg" gender= "female"/> 
                            </View>
                            <View style={styles.profileDetails}>
                                {/* Custom ProfileView Class to show basic info */}
                                <MyShaadiProfileCell accountType="Platinum Plus" fullName="Poonam P" valueShId="sh52654789" expiryDate="30-Sep-18"/>
                                {/* Upgrade Now */}
                            </View>
                        </View>
                </View>  
                {/* Custom Button Class With Global Active Index Object*/}
                <View style={{flexDirection:'row', justifyContent:'space-around',borderTopWidth:1,borderTopColor:"#e2e2e2"}}>
                
                </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileCell: {
    backgroundColor: 'gray',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
  },
  profileDetails: {
    paddingLeft: 15,
  }
});
