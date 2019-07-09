import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import RouterButton from 'react-router-native-button';
import { connect } from 'react-redux';
import * as Font from 'expo-font';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    await Font.loadAsync({
      'raleway-extrabold': require('../../assets/fonts/Raleway-ExtraBold.ttf'),
      'raleway-extralight': require('../../assets/fonts/Raleway-ExtraLight.ttf')
    });
    this.props.loadFont();
  }

  render() {
    console.log('props', this.props)
    return (
      <View style={styles.container}>
        {
          this.props.fontLoaded ? (
            <View>
              <RouterButton 
                to="/"
                title="Home"
                style={styles.button}
              />
              <RouterButton 
                to="/discover"
                title="Discover"
                style={styles.button}
              />
            </View>
          ) : null
        }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  },
  button: {

  }
})

const mapStateToProps = state => {
  return {
    open: state.menuReducer.open,
    fontLoaded: state.fontReducer.fontLoaded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleOpen: () => dispatch(toggleOpen()),
    loadFont: () => dispatch(loadFont())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);