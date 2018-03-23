import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { Icon,Button} from "native-base";

export default class ButtonBlueForUpgrade extends Component {
  render() {
    return (
        <View style={{flexDirection:'row',paddingTop:10}}>
            <Button 
                style={{flex:3,marginLeft:10,justifyContent:'center', height:30 , backgroundColor:"00BCD5"}}>
                <Text>{this.props.textForBtn}  </Text>
            </Button>
        </View>
    );
  }
}
