
//import liraries
import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';


// create a component
class MyShaadiProfileCell extends Component {

    showUpgradeBtnOrExpiryDt = () => {
        if (this.props.accountType==="free"){
            // Show Upgrade Button
        }else {
            // Show Expiry date
            return (
                <Text style = {styleMyShaadiProfileCell.commonCell}>Expiry: {this.props.expiryDate}</Text>
            )
        }
    }


    render() {
        return (
            <View >
                <View style={{flexDirection:'row', alignItems: 'center',}}>
                    <Text style ={styleMyShaadiProfileCell.nameCell}>{this.props.fullName} </Text>
                    <Text style ={styleMyShaadiProfileCell.shIdCell}>({this.props.valueShId}) </Text>
                </View>
                <Text style = {styleMyShaadiProfileCell.edit}>Edit Profile ></Text> 
                <Text style = {styleMyShaadiProfileCell.commonCell}>Account Type:{this.props.accountType}</Text>
                {this.showUpgradeBtnOrExpiryDt()}

            </View>
        );
    }
}


//make this component available to the app
export default MyShaadiProfileCell;

const styleMyShaadiProfileCell = StyleSheet.create({
    commonCell: {
     paddingTop: 6,
     color: 'white',
     fontSize: 12,
    },
    edit: {
      paddingTop: 5,
      color: '#00BCD5',
      fontSize: 12,
    },  
    shIdCell: {
        color: 'white',
        fontSize: 11,
    },
    nameCell: {
        color: 'white',
        fontSize: 17,
    },
});