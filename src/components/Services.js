import React, { Component } from 'react';
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Service from './Service'
class Services extends Component {
    state = {
        services: [
            {
                id: 1,
                icon: <FaCocktail />,
                title: 'free cocktails',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis, eos.'
            },
            {
                id: 2,
                icon: <FaHiking />,
                title: 'free Hiking',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis, eos.'
            },
            {
                id: 3,
                icon: <FaShuttleVan />,
                title: 'free shuttle van',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis, eos.'
            },
            {
                id: 4,
                icon: <FaBeer />,
                title: 'free beer',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis, eos.'
            }
        ]
    }
    render() {
        return (
            <div className='services'>
                <Title title='Services' />
                <div className="services-center">
                    {this.state.services.map(service => <Service key={service.id} icon={service.icon} title={service.title} info={service.info} />)}
                </div>
            </div>
        );
    }
}

export default Services;
