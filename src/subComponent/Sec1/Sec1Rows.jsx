import React, { Component } from 'react'

export default class Sec1Rows extends Component {
  render() {
    return (
      <div className={this.props.order}>
        <div>
          <img src={this.props.src1} alt={this.props.src1} />
        </div>
        <div>
          <img src={this.props.src2} alt={this.props.src2} />
        </div>
      </div>
    )
  }
}
