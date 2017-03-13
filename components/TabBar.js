import React, { Component } from 'react'
import {View, Text, TouchableHighlight, TextInput, StyleSheet, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'





const TabBar = () => {
  return (
    <View style={{ position:'absolute', left:0, right:0, bottom:0, height:50, flexDirection:"row", justifyContent:"space-around"}} >
      <Button style={{height:50}} title="Login" onPress={() =>{
        console.log('pressd Login')
        Actions.Login()}} >Login</Button>
      <Button  style={{height:50}} title="Map" onPress={() => Actions.SwarmMap()}>Map</Button>
      <Button  style={{height:50}}  title="Alert" onPress={() => Actions.sandbox()}>Alert</Button>
    </View>
  )
}

export default TabBar
