import React, { Component } from 'react'
import {View, Text, TouchableHighlight, TextInput, StyleSheet, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import TabBar from './TabBar'





const AlertSent = () => {
  return (
    <View style={{ marginTop:40, flex: 1, backgroundColor:"lightgray"}}>
      <View style={{flex: 5, marginTop: 90}}>
        <Text style={{textAlign:"center", fontWeight:"bold", fontSize:20, color:"red"}}>Alert Sent</Text>
      </View>
      <View style={{flex: 1}} >
        <TabBar />
      </View>
    </View>
  )
}

export default AlertSent
