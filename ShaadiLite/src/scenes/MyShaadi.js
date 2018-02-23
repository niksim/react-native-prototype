import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from "native-base";


export default class MyShaadi extends React.Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-heart" style={{ color: tintColor }} />
        )

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>MyShaadi</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fccc63',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#bc2a8d",
        fontSize: 50,
        opacity: 0.6,
    }
});

