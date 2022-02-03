import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import logo from './logo.png'

export default function Logo() {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" style={{ height: '150px', width: '150px' }} >
                <div className="Tilt-inner pa3"><img src={logo} alt="logo" /></div>
            </Tilt>
        </div>
    )
}
