import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import AlertForm from '../components/AlertForm'
import axios from 'axios'


const mapState = (state) => {
  console.log('state?', state)
  return {
    lat: state.maps.currentPosition.coords.latitude,
    long: state.maps.currentPosition.coords.longitude
  }
}

export class AlertFormContainer extends Component {
  constructor(props){
    super()
    this.state={
      codename:props.codename,
      message: ""
    }
    this.onCodeNameChange = this.onCodeNameChange.bind(this)
    this.onMessageChange = this.onMessageChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onCodeNameChange (codename) {
    this.setState({codename})
    console.log(this.state)
  }

  onMessageChange (message) {
    this.setState({message})
  }

  onSubmit() {
    axios.post('http://10.0.2.2:1337/alerts', Object.assign({}, this.state, this.props))
  }

  render () {
    return (
      <AlertForm {...this.props} onCodeNameChange={this.onCodeNameChange} onMessageChange={this.onMessageChange} onSubmit={this.onSubmit} />
    )
  }
}

export default connect(mapState)(AlertFormContainer)
