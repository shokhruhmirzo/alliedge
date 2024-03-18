import React from 'react'
import './Aboutform.css'

function Aboutform() {
    return (
        <div>
           <section className='about__form'>
           <div className="container">
                <form className='about__formcha' action="#">
                    <h1 className='about__form__title'>Let us plan your dream  <br />
                        project together.</h1>
                        <input className='about__form__inp' type="text" placeholder='Name' />
                        <input className='about__form__inp' type="text" placeholder='Email'/>
                        <input className='about__form__inp' type="text" placeholder='Mobile No' />
                        <input className='about__form__inp' type="text" placeholder='Select Services'/>
                        <input className='about__form__inp px__inp' type="text" placeholder='Project Discription' />
                        <button className='about__form__btn'>Submit</button>
                </form>
            </div>
           </section>
        </div>
    )
}

export default Aboutform