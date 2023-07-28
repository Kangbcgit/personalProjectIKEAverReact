import React, { Component } from "react";

class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStatus: false,
      isHoverSpotOn: false,
    };
  }
  on() {
    this.setState({ activeStatus: true });
  }
  off() {
    this.setState({ activeStatus: false });
  }
  spotHover = () => {
    this.setState({ isHoverSpotOn: true });
  };
  spotLeave = () => {
    this.setState({ isHoverSpotOn: false });
  };

  render() {
    return (
      <a
        href="#none"
        className={`${this.props.item} ${
          this.state.activeStatus || this.props.isResizeOn
            ? this.props.active
            : ""
        }`}
        onMouseOver={(e) => this.on()}
        onMouseLeave={(e) => this.off()}
      >
        <img src={this.props.src} alt="img" />
        <div
          className={`${this.props.spotInfo} ${
            this.state.isHoverSpotOn ? this.props.active : ""
          }`}
          style={{ top: `${this.props.top}%`, left: `${this.props.left}%` }}
          onMouseOver={() => this.spotHover()}
          onMouseLeave={() => this.spotLeave()}
        >
          <i className="fa fa-plus"></i>
        </div>
        <div
          className={this.props.itemInfo}
          style={{
            top: `calc(${this.props.top}% + 40px)`,
            left: `calc(${this.props.left}% + 15px)`,
          }}
          onMouseOver={() => this.spotHover()}
          onMouseLeave={() => this.spotLeave()}
        >
          <h4>상품 이름입니다.</h4>
          <hr />
          <p>
            상품의 설명 공간입니다. 해당 상품의 데이터를 받아오면 이곳에
            표시됩니다.
          </p>
        </div>
      </a>
    );
  }
}

export default CreateItem;
