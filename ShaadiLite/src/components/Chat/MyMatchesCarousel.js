import React from "react"
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native"

export default class MyMatchesCarousel extends React.Component {
  constructor(props) {
    super(props)
  }

  getPlaceHolderImage = profile => {
    var icon =
      profile.gender == "female"
        ? require("../../assets/Silhouette_Female.png")
        : require("../../assets/Silhouette_Male.png")
    return icon
  }

  didSelectUser = () => {}

  getMymatches() {
    return this.props.profiles.map(profile => (
      <View style={styles.container} key={profile.email}>
        <TouchableOpacity
          onPress={this.didSelectUser.bind(this)}
          style={styles.cellTouch}
        >
          <Image
            style={styles.image}
            defaultSource={this.getPlaceHolderImage(profile)}
            source={{ uri: profile.picture.thumbnail }}
          />
          <Text style={styles.userName}>{`${profile.name.first}`}</Text>
        </TouchableOpacity>
      </View>
    ))
  }

  render() {
    return (
      <View style={[styles.carousel, styles.shadow]}>
        <Text style={styles.matchesText}>My Matches</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            paddingEnd: 5,
            paddingStart: 5,
            flexDirection: "row"
          }}
        >
          {this.getMymatches()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  carousel: {
    marginTop: 10,
    marginBottom: 10,
    height: 120,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 2,
    backgroundColor: "white"
  },
  container: {
    height: 80,
    width: 50,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    flexDirection: "column",
    alignItems: "center"
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  userName: {
    marginTop: 4,
    height: 15,
    width: 50,
    textAlign: "center",
    color: "#51505d",
    fontSize: 14,
    fontWeight: "400"
  },
  matchesText: {
    marginTop: 10,
    height: 20,
    width: 100,
    marginLeft: 10,
    color: "#51505d",
    fontSize: 15,
    fontWeight: "400"
  },
  shadow: {
    shadowOpacity: 0.7,
    shadowRadius: 2,
    shadowColor: "grey",
    shadowOffset: { height: 1.5, width: 0 }
  },
  cellTouch: {
    flex: 1
  }
})
