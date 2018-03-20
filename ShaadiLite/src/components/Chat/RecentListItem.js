import React, { Component } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import ChatAvatar from "./ChatAvatar"
export default class RecentListItem extends Component {
  constructor(props) {
    super(props)
  }

  didSelectUser = () => {}

  getcount = gender => {
    if (gender == "male") {
      return (
        <View style={styles.countView}>
          <Text style={styles.count}>3</Text>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={[styles.maincontainer]}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.didSelectUser.bind(this)}
            style={styles.cellTouch}
          >
            <ChatAvatar profile={this.props.profile} />
            <View style={styles.textContainer}>
              <Text style={styles.userName}>{`${
                this.props.profile.name.title
              } ${this.props.profile.name.first} ${
                this.props.profile.name.last
              }`}</Text>
              <Text
                style={
                  this.props.profile.gender == "male"
                    ? [styles.ageCity, { color: "black", fontWeight: "bold" }]
                    : styles.ageCity
                }
              >
                {this.props.profile.login.username}
              </Text>
            </View>
            <View style={{ alignItems: "center", flexDirection: "column" }}>
              <Text style={styles.time}>8:15 AM</Text>
              {this.getcount(this.props.profile.gender)}
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.seperator} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    flexDirection: "column",
    height: 65,
    backgroundColor: "white"
  },
  container: {
    flexDirection: "row",
    height: 64,
    backgroundColor: "white"
  },
  cellTouch: {
    flex: 1,
    flexDirection: "row",
    height: 64,
    alignItems: "flex-start"
  },
  textContainer: {
    flex: 1,
    flexDirection: "column"
  },
  userName: {
    color: "#51505d",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 10,
    marginTop: 10
  },
  ageCity: {
    color: "#72727d",
    fontSize: 12,
    fontWeight: "400",
    marginLeft: 10,
    marginTop: 10
  },
  time: {
    color: "#72727d",
    fontSize: 13,
    fontWeight: "500",
    marginRight: 20,
    marginTop: 10
  },
  countView: {
    backgroundColor: "#00bcd5",
    marginRight: 20,
    marginTop: 10,
    height: 20,
    width: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  count: {
    color: "white",
    fontSize: 13,
    fontWeight: "500"
  },
  seperator: {
    backgroundColor: "#dfe0e3",
    height: 1,
    alignItems: "flex-end",
    marginLeft: 70,
    marginRight: 20
  }
})
