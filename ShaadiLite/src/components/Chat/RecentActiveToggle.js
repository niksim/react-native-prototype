import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "native-base";

export default class RecentActiveToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabSelected: 0
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonView}>
          <Button full transparent onPress={() => this.toggle()}>
            <Text
              style={{
                paddingTop: 3,
                fontWeight: "bold",
                color: this.state.tabSelected == 0 ? "#00bcd5" : "#72727d"
              }}
            >
              Recent Chat's
            </Text>
          </Button>
          <View
            style={[
              {
                height: 3,
                backgroundColor:
                  this.state.tabSelected == 0 ? "#00bcd5" : "white"
              },
              styles.shadow
            ]}
          />
        </View>

        <View style={styles.buttonView}>
          <Button full transparent onPress={() => this.toggle()}>
            <Text
              style={{
                paddingTop: 3,
                fontWeight: "bold",
                color: this.state.tabSelected != 0 ? "#00bcd5" : "#72727d"
              }}
            >
              Active
            </Text>
          </Button>
          <View
            style={[
              {
                height: 3,
                backgroundColor:
                  this.state.tabSelected != 0 ? "#00bcd5" : "white"
              },
              styles.shadow
            ]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 40,
    backgroundColor: "white"
  },
  buttonView: {
    flex: 1,
    height: 40,
    justifyContent: "center",
    backgroundColor: "white"
  },
  shadow: {
    shadowOpacity: 0.75,
    shadowRadius: 0.2,
    shadowColor: "grey",
    shadowOffset: { height: 1, width: 0 }
  }
});
