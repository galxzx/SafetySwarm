import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import  MapView, {Marker}  from 'react-native-maps'
import AlertMarkerContainer from '../containers/AlertMarkerContainer'
import TabBar from './TabBar'

const {height, width} = Dimensions.get('window')

const aspectRatio = width / height;


const styles = StyleSheet.create({
     container: {
        ...StyleSheet.absoluteFillObject,
       height: height-100,
       width: width,
       flex: 5,
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
    console.log('props', this.props)
    const latitude = this.props.currentPosition.coords.latitude
    const longitude = this.props.currentPosition.coords.longitude
    const currentCoord = {latitude, longitude}
    console.log(this.props.currentPosition.coords)


    return (
      <View style={{flex:1, flexDirection:"column", marginTop: 60}}>
        <View style={styles.container}>
          <MapView style={styles.map}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.0062,
              longitudeDelta: 0.0062/aspectRatio,
              }}
              key={this.props.currentPosition.timestamp}
          >

            <Marker coordinate={currentCoord}></Marker>
            {this.props.alerts.map(alert => {

              let coords = {
                latitude: alert.lat,
                longitutde: alert.long
              }
              return (
               <Marker key={alert.id} coordinate={{longitude: alert.long, latitude:alert.lat}} title={`codename: ${alert.codename}`} description={alert.message} >
                <AlertMarkerContainer alert={alert} />
               </Marker>
              )
            })}

          </MapView>
        </View>

        <TabBar />

      </View>
    )
  }
}


