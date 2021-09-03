import React from 'react'
import { Button } from '../Button/Button'
import './Hero.css'

function Hero() {
    return (
        <div>
            <div className="hero-container">
            <img   src="" alt="" />
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for?</p>
                <div className="hero-btns">
                    <Button className='btns' buttonSize='btn--large' buttonStyle='btn--outline'>
                        GET STARTED
                    </Button>

                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        onClick={console.log('hey')}
                    >
                        WATCH TRAILER <i className='far fa-play-circle' />
                    </Button>
                
                </div>
            </div>
        </div>
    )
}

export default Hero
