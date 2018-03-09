//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

import { Card, CardItem, Thumbnail, Body, Left, Button, Icon } from 'native-base';
import { LinearGradient } from 'expo';

// create a component
class CardComponent extends Component {
    render() {

        const images = {
            "1": require('../../assets/image_1.jpg'),
            "2": require('../../assets/ameya.jpg'),
            "3": require('../../assets/ameya.jpg')
        }

        return (
            <Card>

                <CardItem>
                    <ImageBackground source={images[this.props.imageSource]} style={{ width: null, height: 200, flex: 1 ,justifyContent: "flex-end"}}>
                        <View style={{ marginBottom: 0, width: null, height: 100, flexDirection: "row" }}>
                            <LinearGradient
                                colors={['rgba(2.0,2.0,2.0,1.0)', 'transparent']}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    top: 0,
                                }}
                            /></View>
                    </ImageBackground>

                </CardItem>

            </Card>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default CardComponent;
