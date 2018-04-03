/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SentItemCardComponent from "../SentItemCardComponent";
import EmptyView from "../Chat/EmtpyView";
import axios from "axios";

export default class SentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      error: null
    };
  }

  componentDidMount() {
    this.fetchSentItemList();
  }

  async fetchSentItemList() {
    const url = `https://randomuser.me/api/?page=1&results=20`;
    this.setState({ loading: true });

    const users = await axios
      .get(url)
      .then(res => {
        this.setState({
          data: res.data.results,
          error: res.error || null,
          loading: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ListEmptyComponent={
            <EmptyView loadertext="Updating Sent Item List" />
          }
          data={this.state.data}
          renderItem={({ item }) => <SentItemCardComponent profile={item} />}
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
