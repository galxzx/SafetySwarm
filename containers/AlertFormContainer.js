import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import AlertForm from '../components/AlertForm'

export class AlertFormContainer extends Component {
  constructor(props){
    super()
    this.state={
      codename:props.codename,
      message: ""
    }
    this.onCodeNameChange = this.onCodeNameChange.bind(this)
    this.onMessageChange = this.onMessageChange.bind(this)
  }

  onCodeNameChange (codename) {
    this.setState({codename})
  }

  onMessageChange (message) {
    this.setState({message})
  }

  onSubmit() {

  }

  render () {
    return (
      <AlertForm {...this.props} onCodeNameChange={this.onCodeNameChange} onMessageChange={this.onMessageChange} onSubmit={this.onSubmit} />
    )
  }
}

export default AlertFormContainer
