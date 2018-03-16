import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import ActiveListItem from './ActiveListItem';
export default class ActiveList extends React.Component {
  render() {
    return (
      <FlatList
        style={{ marginTop: 3 }}
        data={this.props.data}
        renderItem={({ item }) => <ActiveListItem profile={item} />}
        keyExtractor={item => item.email}
      />
    );
  }
}
