import React, { Component } from 'react'
// import { AppRegistry, View, Text, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';

import Login from '../components/Login'
import {saveCodeName, setCodeName} from '../reducers/login'


const mapState = () => ({})

const mapDispatch = (dispatch) => {
  return {
    onSubmitEditing (event) {
      dispatch(saveCodeName(event.nativeEvent.text))
      Actions.SwarmMap()
    }
  }
}

export default connect(mapState, mapDispatch)(Login)
