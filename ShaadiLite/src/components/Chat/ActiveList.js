import React, { Component } from "react"
import { View, Text, SectionList, ActivityIndicator } from "react-native"
import ActiveListItem from "./ActiveListItem"
import EmptyView from "../Chat/EmtpyView"

export default class ActiveList extends React.Component {
  renderHeader = headerItem => {
    if (this.props.data.length > 0) {
      return (
        <View
          style={{
            height: 35,
            backgroundColor: "#F2F2F2",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              marginLeft: 10,
              color: "#51505d",
              fontSize: 15,
              fontWeight: "500"
            }}
          >
            {headerItem.section.key}
          </Text>
        </View>
      )
    }
  }
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
        <SectionList
          sections={
            this.props.data.length > 0
              ? [
                  { data: this.props.data, key: "Accepted Members" },
                  { data: this.props.data, key: "My Matches" }
                ]
              : []
          }
          renderItem={({ item }) => <ActiveListItem profile={item} />}
          renderSectionHeader={this.renderHeader}
          ListEmptyComponent={<EmptyView loadertext={"Updating Active List"} />}
          keyExtractor={item => item.email}
        />
      </View>
    )
  }
}
