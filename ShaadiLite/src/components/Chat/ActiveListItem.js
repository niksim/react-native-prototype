import React, { Component } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import ChatAvatar from "./ChatAvatar"
export default class ActiveListItem extends Component {
  constructor(props) {
    super(props)
  }

  didSelectUser = () => {}

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.didSelectUser.bind(this)}
          style={styles.cellTouch}
        >
          <ChatAvatar profile={this.props.profile} />
          <View style={styles.textContainer}>
            <Text style={styles.userName}>{`${this.props.profile.name.title} ${
              this.props.profile.name.first
            } ${this.props.profile.name.last}`}</Text>
            <Text style={styles.profession}>{`Marketing Professional`}</Text>
            <Text style={styles.ageCity}>{`30yrs, ${
              this.props.profile.location.city
            }`}</Text>
            <View style={styles.seperator} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 70,
    backgroundColor: "white"
  },
  cellTouch: {
    flex: 1,
    flexDirection: "row",
    height: 70,
    alignItems: "flex-start"
  },
  textContainer: {
    flex: 1,
    flexDirection: "column"
  },
  userName: {
    color: "#51505d",
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 10,
    marginTop: 5
  },
  ageCity: {
    color: "#72727d",
    fontSize: 13,
    fontWeight: "400",
    marginLeft: 10,
    marginTop: 1
  },
  profession: {
    color: "#72727d",
    fontSize: 13,
    fontWeight: "400",
    marginLeft: 10,
    marginTop: 3
  },
  seperator: {
    backgroundColor: "#dfe0e3",
    height: 1,
    alignItems: "flex-end",
    marginLeft: 10,
    marginTop: 10,
    marginRight: 20
  }
})
