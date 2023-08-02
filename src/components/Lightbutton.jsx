import React, { Component } from 'react'
import './../css/lightbutton.css';
export default class Lightbutton extends Component {
    constructor(props) {
      super(props)
    }
  render() {
    return (
      <button>{this.props.content}</button>
    )
  }
}
