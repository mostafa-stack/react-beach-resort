import React, { Component } from 'react';

class Banner extends Component {
    render() {
        const { heading, paragraph, children } = this.props

        return (
            <div className='banner' >
                <h1>{heading}</h1>
                <div></div>
                <p>{paragraph}</p>
                {children}
            </div>
        );
    }
}

export default Banner;
