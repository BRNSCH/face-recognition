import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './brain.png'

const Logo = () => {
    
    return (

        <div className='ma4 mt0 '>
            <Tilt className='tilt-width'>
                <div style={{ height: '100px', width:'100px' }}>
                    <img src={brain} alt='brain'></img>
                </div>
            </Tilt>
            
        </div>
    )
}
export default Logo;