import React, { Component } from "react"
import { View, Text, FlatList, ActivityIndicator } from "react-native"
import { List, ListItem, SearchBar } from "react-native-elements"

export default class RecentList extends React.Component {
  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={({ item }) => (
          <ListItem
            roundAvatar
            title={`${item.name.first} ${item.name.last}`}
            subtitle={item.email}
            avatar={{ uri: item.picture.thumbnail }}
            containerStyle={{ borderBottomWidth: 0 }}
          />
        )}
        keyExtractor={item => item.email}
      />
    )
  }
}
