import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Login = ({onSubmitEditing})=> {

  return (
    <View style={{marginTop: 40, backgroundColor:"lightgray"}}>
      <View style={{margin:30}}>
        <Text style={{fontWeight:"bold"}}>Code Name</Text>
        <TextInput onSubmitEditing={onSubmitEditing} style={{height: 40, borderColor: 'blue', borderWidth: 1}}/>
      </View>
    </View>
  )

}

export default Login
