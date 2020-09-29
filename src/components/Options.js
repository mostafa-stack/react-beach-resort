import React, { Component } from "react";

export default class Options extends Component {
  render() {
    const { roomType } = this.props;
    return <option value={roomType}>{roomType}</option>;
  }
}
