import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';
import TabBarIconView from '../components/TabBarIconView';
import ChatHeader from "../components/Chat/ChatHeaders"

export default class MyShaadi extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => (
      <TabBarIconView tabIndex={0} focused={focused} />
    )
  };

  render() {
    return (
        <View style={styles.container}>
        <ChatHeader />
        <View style={{paddingTop:10}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex:1,alignItems:'center'}}>
                        <Image source={require('../assets/Silhouette_Male.png')} style={{width:75,height:75, borderRadius:37.5}}/> 
                    </View>
                    <View style={{flex:3}}>
                        {/* Custom ProfileView Class to show basic info */}
                        {/* <ProfileView name="Poonam,Priyanka,Sanket" expertise = "iOS | Hybrid | Android | React"  emailid="poonam.pandey@peopleinterative.in"/> */}
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
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  text: {
    color: '#bc2a8d',
    fontSize: 50,
    opacity: 0.6
  }
});
