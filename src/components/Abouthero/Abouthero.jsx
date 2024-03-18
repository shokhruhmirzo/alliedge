import React from 'react'
import './Abouthero.css'

function Abouthero() {
  return (
    <div>
      <section className='about__hero'>
          <div className="container">
            <h1 className='about__hero__title'>Expand your <br />
              coverage with <span> Alliedge.</span></h1>
            <p className='about__hero__text'>Customer satisfaction is at the heart of everything we do.We are committed to  providing exceptional IT services <br />
              that exceed your expectations and help you  achieve your business goals.</p>
            <button className='about__hero__btn'>Let’s connect</button>
          </div>
        </section>
    </div>
  )
}

export default Abouthero