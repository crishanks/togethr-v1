import React from 'react';
import { StyleSheet, View } from 'react-native';

//Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
const store = createStore(reducers);

//Routes
import { NativeRouter, Route } from 'react-router-native';

//Components
import Welcome from './src/containers/Welcome';
import NavBar from './src/components/NavBar';
import Discover from './src/containers/Discover';

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <NavBar/>
          <View style={{flex: 2, width: '100%', height: '100%'}}>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/discover" component={Discover}/>
          </View>
        </View>
      </NativeRouter>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    color: 'red'
  }
});