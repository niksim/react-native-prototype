//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';

import { Card, CardItem, Thumbnail, Body, Left, Button, Icon } from 'native-base';
import { LinearGradient } from 'expo';

// create a component
class CardComponent extends Component {
    render() {

        const images = {
            "1": require('../../assets/image_1.jpg'),
            "2": require('../../assets/image_2.jpg'),
            "3": require('../../assets/image_3.jpg')
        }

        return (
            <Card style={styles.cardContainer}>
                <CardItem cardBody>
                    <ImageBackground source={images[this.props.imageSource]} style={styles.image}>
                        <View style={{ marginBottom: 0, width: null, height: 300, flexDirection: "row" }}>
                            <LinearGradient
                                colors={['rgba(1.0,1.0,1.0,0.0)', 'rgba(1.0,1.0,1.0,0.4)', 'rgba(1.0,1.0,1.0,0.7)', 'rgba(1.0,1.0,1.0,0.95)']}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    top: 0,
                                }}
                            />
                        </View>
                    </ImageBackground>
                </CardItem>
            </ Card>
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
    cardContainer: {
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        // borderRadius: 10.0,
        // borderColor: "red",
        // cornerRadius: 50.0,
        shadowOpacity: 5.0,
        shadowRadius: 5.0,
    },
    image: {
        flex: 1,
        justifyContent: "flex-end",
        width: Dimensions.get('window').width - 20,
        height: (Dimensions.get('window').width) * 1.3386,
    },

});

//make this component available to the app
export default CardComponent;
