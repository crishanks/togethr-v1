import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Link } from 'react-router-native';
import * as Font from 'expo-font';

export default class  Welcome extends React.Component {
  state = {
    fontLoaded: false
  }

  async componentWillMount() {
    await Font.loadAsync({
      'raleway-extrabold': require('../../assets/fonts/Raleway-ExtraBold.ttf'),
      'raleway-extralight': require('../../assets/fonts/Raleway-ExtraLight.ttf')
    });
    this.setState({fontLoaded: true})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          {
            this.state.fontLoaded ? (
              <Text style={{fontFamily: 'raleway-extrabold', fontSize: 56, color: '#3185FC'}}>togethr</Text>
            ) : null
          }
        </View>
        <View style={styles.bottom}>
          {
            this.state.fontLoaded ? (
              <Link to="/discover"><Text style={{color: 'white', fontFamily: 'raleway-extralight', fontSize: 24}}>Get Started</Text></Link>
            ) : null
          }
        </View>
      </View>
    );
  }
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
    backgroundColor: '#403F4C',
    justifyContent: 'center',
    alignItems: 'center',
  }
});