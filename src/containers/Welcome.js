import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Link } from 'react-router-native';

export default function Welcome() {
  return (
      <View style={{flex: 3, height: 100, backgroundColor: 'black', justifyContent: 'center'}}>
        <View style={{flex: 4, backgroundColor: 'white'}}>
          <Text>Top Half</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center', height: 300}}>
          <Link to="/discover"><Text style={{color: 'white'}}>Get Started</Text></Link>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000'
  },
  link: {
    color: 'white'
  }
});