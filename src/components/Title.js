import React, { Component } from "react";

class Title extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="section-title">
        <h4>{title}</h4>
        <div></div>
      </div>
    );
  }
}

export default Title;
