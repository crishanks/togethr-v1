import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Menu from './Menu';

export default function NavBar() {
  return (
    <View style={styles.container}>
      <Text>togethr</Text>
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 140,
    backgroundColor: '#23C9FF',
    alignItems: 'center'
  }
});