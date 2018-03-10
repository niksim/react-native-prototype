import React, { Component } from "react"
import { StyleSheet, View, Text } from "react-native"
import { Button } from "native-base"
import RecentList from "./RecentList"
import ActiveList from "./ActiveList"
import axios from "axios"

export default class RecentActiveToggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: false,
      error: null,
      tabSelected: 0
    }
  }

  componentDidMount() {
    this.fetchRecentList()
  }

  async fetchRecentList() {
    const url = `https://randomuser.me/api/?page=1&results=20`
    this.setState({ loading: true })

    const users = await axios
      .get(url)
      .then(res => {
        this.setState({
          data: res.data.results,
          error: res.error || null,
          loading: false
        })
      })
      .catch(error => {
        this.setState({ error, loading: false })
      })
  }
  toggle = () => {
    this.fetchRecentActiveList()
    this.setState({ tabSelected: this.state.tabSelected == 0 ? 1 : 0 })
  }

  async fetchActiveList() {
    const url = `https://randomuser.me/api/?page=2&results=20`
    this.setState({ loading: true })

    const users = await axios
      .get(url)
      .then(res => {
        this.setState({
          data: res.data.results,
          error: res.error || null,
          loading: false
        })
      })
      .catch(error => {
        this.setState({ error, loading: false })
      })
  }
  toggle = () => {
    this.setState({
      data: [],
      tabSelected: this.state.tabSelected == 0 ? 1 : 0
    })
    if (this.state.tabSelected == 0) {
      this.fetchRecentList()
    } else {
      this.fetchActiveList()
    }
  }

  getSelectedList = () => {
    if (this.state.tabSelected == 0) {
      return <ActiveList style={{ paddingTop: 2 }} data={this.state.data} />
    } else {
      return <RecentList style={{ paddingTop: 2 }} data={this.state.data} />
    }
  }
  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
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
                  color: this.state.tabSelected == 1 ? "#00bcd5" : "#72727d"
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
                    this.state.tabSelected == 1 ? "#00bcd5" : "white"
                },
                styles.shadow
              ]}
            />
          </View>
        </View>
        {this.getSelectedList()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 43,
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
})
