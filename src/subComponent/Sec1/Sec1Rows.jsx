import React, { Component } from 'react'

export default class Sec1Rows extends Component {
  render() {
    return (
      <>
        <div className={this.props.itemFirst}></div>
        <div className={this.props.itemSecond}></div>
      </>
    )
  }
}
