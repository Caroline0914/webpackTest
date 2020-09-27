import React, { Component } from 'react'
import Img from '../assets/img.jpg'

export default class Cmp extends Component {
  render() {
    return (
      <div className="wrapper">
        wrapper
        <div className="box">
          box
          <img src={Img} alt=""/>
        </div>
      </div>
    )
  }
}
