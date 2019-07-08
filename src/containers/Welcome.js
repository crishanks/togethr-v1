import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Link } from 'react-router-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text>togethr</Text>
      </View>
      <View style={styles.bottom}>
        <Link to="/discover"><Text style={{color: 'white'}}>Get Started</Text></Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  main: {
    flex: 1,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottom: {
    flex: 1,
    height: 5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#000'
//   },
//   bottom: {
//     flex: 3,
//     height: 100, 
//     backgroundColor: 'black',
//     justifyContent: 'center'
//   },
//   main: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 300
//   }
// });