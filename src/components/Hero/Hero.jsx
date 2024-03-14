import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div>
        <section className='hero'>
          <div className="container">
            <h1 className='hero__title'>Expand your <br />
              coverage with <span> Alliedge.</span></h1>
            <p className='hero__text'>Customer satisfaction is at the heart of everything we do.We are committed to  providing exceptional IT services <br />
              that exceed your expectations and help you  achieve your business goals.</p>
            <button className='hero__btn'>Let’s connect</button>
          </div>
        </section>
    </div>
  )
}

export default Hero