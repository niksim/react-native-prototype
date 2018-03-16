import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import RecentListItem from '../Chat/RecentListItem';

export default class RecentList extends React.Component {
  render() {
    return (
      <FlatList
        style={{ marginTop: 3 }}
        data={this.props.data}
        renderItem={({ item }) => <RecentListItem profile={item} />}
        keyExtractor={item => item.email}
      />
    );
  }
}
