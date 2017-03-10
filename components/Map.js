import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import  MapView  from 'react-native-maps'

const {height, width} = Dimensions.get('window')




const styles = StyleSheet.create({
     container: {
        ...StyleSheet.absoluteFillObject,
       height: height / 3 * 2,
       width: width,
       justifyContent: 'flex-end',
       alignItems: 'center',
     },
     map: {
       ...StyleSheet.absoluteFillObject,
            },
    });

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     height: height,
//     width: width
//   },
//   map: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     height: height,
//     width: width
//   },
// });

export default class SwarmMap extends Component {


  render() {

    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
        >
        </MapView>
        </View>
    )
  }
}


