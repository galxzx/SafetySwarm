import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet, Dimensions } from 'react-native'

const AlertMarker = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.bubble}>
        <Text style={{fontWeight:"bold", fontSize:18}}> &lt; </Text>
        <Text style={{fontWeight:"bold", fontSize:18}}>{props.age}</Text>
        <Text style={{fontWeight:"bold", fontSize:18}}> Min</Text>
      </View>
      <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
    </View>
  )
}

//styles from MapView example https://github.com/airbnb/react-native-maps/blob/master/example/examples/PriceMarker.js
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#00cc00',
    padding: 2,
    borderRadius: 3,
    borderColor: '#D23F44',
    borderWidth: 0.5,
  },
   arrow: {
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: '#00cc00',
    alignSelf: 'center',
    marginTop: -9,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: '#D23F44',
    alignSelf: 'center',
    marginTop: -0.5,
  }
})

export default AlertMarker
