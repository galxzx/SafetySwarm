import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet, Dimensions } from 'react-native'
import AlertMarker from '../components/AlertMarker'

const findAge = (timestamp) => {
  let current = Date.now()
  let timediff = current - timestamp
  return Math.ceil(timediff / 1000 / 60)

}

class AlertMarkerContainer extends Component {
  constructor (props) {
    super()
    this.state = {age: 0}
  }

  componentWillMount (){
    let age = findAge(this.props.alert.timestamp)
    this.setState({age: age})
  }

  componentDidMount () {
    updateAge = setInterval(()=>{
      let age = findAge(this.props.alert.timestamp)
      this.setState({age: age})
    }, 1000*60)
  }

  componentWillUnmount () {
    clearInterval(updateAge)
  }

  render (){
    return (
    <AlertMarker age={this.state.age} key={this.props.alert.timestamp + (this.state.age*1000)} />
    )
  }
}

export default AlertMarkerContainer
