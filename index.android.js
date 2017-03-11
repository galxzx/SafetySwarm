/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Router, Scene} from 'react-native-router-flux'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import MapContainer from './containers/MapContainer'
import LoginContainer from './containers/LoginContainer'
import store from './reducers/store'
import { setCurrentPosition } from './reducers/maps'
import { Provider } from 'react-redux'


export default class Swarm extends Component {

   componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        store.dispatch(setCurrentPosition(position))
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      store.dispatch(setCurrentPosition(position))
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <Provider store={store} >
        <Router>
          <Scene key="root">
            <Scene key="Login" component={LoginContainer} title="Login"  />
            <Scene key="SwarmMap" component={MapContainer} title="Swarm Map" initial={true} />
          </Scene>
        </Router>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Swarm', () => Swarm);
