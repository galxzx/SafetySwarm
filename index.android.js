/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Router, Scene, Actions, Switch, TabBar} from 'react-native-router-flux'
import {
  AsyncStorage,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';
import DeviceInfo from 'react-native-device-info'

import MapContainer from './containers/MapContainer'
import LoginContainer from './containers/LoginContainer'
import AlertFormContainer from './containers/AlertFormContainer'
import store from './reducers/store'
import { setCurrentPosition } from './reducers/maps'
import { setCodeName, registerDevice } from './reducers/login'

import { Provider, connect } from 'react-redux'


export default class Swarm extends Component {

  componentWillMount() {
    console.log('entered onEnter')
    AsyncStorage.getItem('codename')
      .then(codename => {
        if(codename) {
          store.dispatch(setCodeName(codename))
        }
      })
      .catch(err => console.error(err))
  }



//Move device Id here
//Get device Id, position, token, then register in database, does not need "codename" to register
   componentDidMount() {
    const deviceId = DeviceInfo.getUniqueID();
     FCM.getFCMToken().then(token => {
            console.log('token', token)
            // store fcm token in your server

    navigator.geolocation.getCurrentPosition(
      (position) => {
        store.dispatch(setCurrentPosition(position))
        let lat = position.coords.latitude
        let long = position.coords.longitude
        store.dispatch(registerDevice(deviceId, lat, long, token))
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
    })
     .catch(err => console.log('Something went wrong', err))
    this.watchID = navigator.geolocation.watchPosition((position) => {
      store.dispatch(setCurrentPosition(position))
    })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }


// component={connect(state =>({codename: state.codename}))(Switch)}
//             tabs={true}
//             selector={props=>props.codename ? 'sandbox' : 'Login'}

  render() {
    return (
      <Provider store={store} >
        <Router >
          <Scene key="root" >
              <Scene key="Login" component={LoginContainer} title="Login" initial={true} />
              <Scene key="SwarmMap" component={MapContainer} title="Swarm Map" />
              <Scene key="sandbox" component={AlertFormContainer} title="Send Alert"   />
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










