import React, { Component } from 'react'

export default class Service extends Component {
    render() {
        const { icon, title, info } = this.props
        return (
            <div className='service'>
                <span>{icon}</span>
                <h6>{title}</h6>
                <p>{info}</p>
            </div>
        )
    }
}
