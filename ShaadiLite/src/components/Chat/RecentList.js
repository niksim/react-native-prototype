import React, { Component } from "react"
import { View, Text, FlatList, ActivityIndicator } from "react-native"
import RecentListItem from "../Chat/RecentListItem"
import MyMatchesCarousel from "../Chat/MyMatchesCarousel"
import EmptyView from "../Chat/EmtpyView"

export default class RecentList extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#F2F2F2",
          marginTop: 2
        }}
      >
        <FlatList
          ListEmptyComponent={<EmptyView loadertext="Updating Recent List" />}
          ListHeaderComponent={
            this.props.data.length > 0 ? (
              <MyMatchesCarousel profiles={this.props.data} />
            ) : null
          }
          data={this.props.data}
          renderItem={({ item }) => <RecentListItem profile={item} />}
          keyExtractor={item => item.email}
        />
      </View>
    )
  }
}
