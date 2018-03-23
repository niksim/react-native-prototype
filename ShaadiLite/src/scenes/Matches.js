import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Container, Content } from 'native-base';
import CardComponent from '../components/CardComponent';
import TabBarIconView from '../components/TabBarIconView';

export default class Matches extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => (
      <TabBarIconView tabIndex={1} focused={focused} />
    )
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <CardComponent imageSource="1" likes="101" />
          <CardComponent imageSource="2" likes="101" />
          <CardComponent imageSource="3" likes="101" />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
