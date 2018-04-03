import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Content, Card, CardItem, Icon, Thumbnail, Header, Body, Left, Right } from "native-base";


export default class OptionAndSettings extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}


{/* <Image style={styles.settingImage} source={this.props.settingIcon} />
                <Text style={styles.settingText}>{this.props.settingName}</Text>
                <Image style={styles.accessoryIcon} source={require('../../assets/MyShaadi_Icons/icon_Accessory.jpg')}/> */}


const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //flexDirection: "row",
        //justifyContent: 'center',
        backgroundColor: 'green',
        height : 50,

    },
    settingImage: {
        resizeMode : "center",
        marginLeft : 5,

    },
    settingText: {
        //alignSelf : 'center',
    },
    accessoryIcon : {
        resizeMode : "center",
        //alignSelf : 'center',
        marginRight : 10,

    }
});
