import React, { Component } from "react"
import { View, Text, ActivityIndicator, StyleSheet } from "react-native"

export default class EmtpyView extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="small" color="grey" />
        <Text style={styles.matchesText}>{this.props.loadertext}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row"
  },
  matchesText: {
    marginLeft: 5,
    color: "#51505d",
    fontSize: 15,
    fontWeight: "400"
  }
})
