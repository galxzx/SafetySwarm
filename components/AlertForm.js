import React, { Component } from 'react'
import {View, Text, TouchableHighlight, TextInput, StyleSheet, Button } from 'react-native'
import TabBar from './TabBar'


const AlertForm = ({onCodeNameChange, onMessageChange, codename, onSubmit}) => {
  return (
    <View style={{marginTop: 80, flex:1, flexDirection:"column"}}>
      <View style={{flex:5}}>
        <View>
          <Text>Code Name </Text>
          <TextInput onChangeText={onCodeNameChange} defaultValue={codename}/>
        </View>
        <View>
          <Text> Message </Text>
          <TextInput onChangeText={onMessageChange} maxLength={200} />
        </View>
        <Button style={{backgroundColor:"blue", color:"red"}}
          onPress={onSubmit} title="Send Alert">
        </Button>
      </View>
      <TabBar />
    </View>

  )
}

export default AlertForm
