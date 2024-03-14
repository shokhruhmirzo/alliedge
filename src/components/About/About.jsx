import React from 'react'
import './About.css'

function About() {
  return (
    <div>
       <section className='about'>
        <div className="container">
          <h1 className='about__title'> About <span>Us</span></h1>
          <span className='span'></span>

          <h2 className='about__h2'>Who We Are</h2>
          <div className='spancha'></div>
          <p className='about__text'>We are believers in change! A change is driven by technology and <br />
            innovation. We help individuals, start-ups, businesses, and <br />
            enterprises adapt and adopt digital transformation. We aim to <br />
            change people's lives and improve businesses with our progressive, <br />
            value-adding, innovative technology solutions.</p>
          <div className='spancha'></div>

          <h2 className='about__h2 padding'>What We Do</h2>
          <div className='spancha'></div>
          <p className='about__text'>We are believers in change! A change is driven by technology and <br />
            innovation. We help individuals, start-ups, businesses, and <br />
            enterprises adapt and adopt digital transformation. We aim to <br />
            change people's lives and improve businesses with our progressive, <br />
            value-adding, innovative technology solutions.</p>
          <div className='spancha'></div>

          <form className='form' action="#">
            <h2 className='form__title'>Let us plan your dream  <br />
              project together.</h2>
            <input className='form__inp' type="text" placeholder='Name' />
            <input className='form__inp' type="email" placeholder='Email' />
            <input className='form__inp' type="text" placeholder='Mobile No' />
            <input className='form__inp' type="text" placeholder='Select Services' />
            <input className='form__inp inp__big' type="text" placeholder='Project Discription' />
            <button className='form__btn'>Submit</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default About