import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Menu from './Menu';

export default function NavBar() {
  return (
    <View style={{width: '100%', height: 140, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center'}}>
      <Text>togethr</Text>
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: 'red'
  }
});