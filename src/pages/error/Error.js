import React from 'react'
import Hero from '../../components/Hero'
import Banner from '../../components/Banner'
import { Link } from 'react-router-dom'
export default function Error() {
    return (
        <div>
            <Hero hero='defaultHero'>
                <Banner heading='404' paragraph='page not found'>
                    <Link to='/' className='btn-primary'>return home</Link>
                </Banner>
            </Hero>
        </div>
    )
}
