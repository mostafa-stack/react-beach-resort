import React, { Component } from "react";

export default class Hero extends Component {

    render() {
      const { hero, children } = this.props;
      return <div className={hero}>{children}</div>;
    }
}
