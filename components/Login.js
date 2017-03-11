import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Login = ({onSubmitEditing})=> {

  return (
    <View style={{marginTop: 80}}>
      <Text>Code Name</Text>
      <TextInput onSubmitEditing={onSubmitEditing} style={{height: 40, borderColor: 'blue', borderWidth: 1}}/>
    </View>
  )

}

export default Login
