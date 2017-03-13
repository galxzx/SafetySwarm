import React, { Component } from 'react'
import {View, Text, TouchableHighlight, TextInput, StyleSheet, Button } from 'react-native'
import TabBar from './TabBar'


const AlertForm = ({onCodeNameChange, onMessageChange, codename, onSubmit}) => {
  return (
    <View style={{marginTop: 50, flex:1, flexDirection:"column", backgroundColor:"lightgray"}}>
      <View style={{flex:5, margin:10}}>
        <View>
          <Text style={{fontWeight:"bold"}} >Code Name </Text>
          <TextInput onChangeText={onCodeNameChange} defaultValue={codename}/>
        </View>
        <View>
          <Text style={{fontWeight:"bold"}} > Message </Text>
          <TextInput onChangeText={onMessageChange} maxLength={200} />
        </View>
        <Button color="darkred"
          onPress={onSubmit} title="Send Alert">
        </Button>
      </View>
      <TabBar />
    </View>

  )
}

export default AlertForm
