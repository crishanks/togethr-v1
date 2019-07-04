import React, { Component } from 'react';
import { StyleSheet, View, Button} from 'react-native';
import RouterButton from 'react-router-native-button';
import { connect } from 'react-redux';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
       <RouterButton 
        to="/"
        title="Home"
       />
       <RouterButton 
        to="/discover"
        title="Discover"
       />
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
})

const mapStateToProps = state => {
  return {
    open: state.menuReducer.open
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleOpen: () => dispatch(toggleOpen())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);