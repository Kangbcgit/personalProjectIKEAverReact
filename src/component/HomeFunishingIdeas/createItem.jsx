import React, { Component } from 'react'

class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStatus: false
    }
  }

  on () {
    this.setState({activeStatus: true})
  }
  off () {
    this.setState({activeStatus: false})
  }

  render() {
    return (
      <a href="#none" className={`${this.props.item} ${this.state.activeStatus ? this.props.active : ''}`} onMouseOver={e => this.on()} onMouseLeave={e => this.off()}>
        <img src={this.props.src} />
        <div className={this.props.spotInfo} style={{top: `${this.props.top}%`, left: `${this.props.left}%`}}>
          <i className="fa fa-plus"></i>
        </div>
      </a>
    );
  }
}

export default CreateItem