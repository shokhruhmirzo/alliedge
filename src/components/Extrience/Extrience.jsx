import React from 'react'
import './Extrience.css'

import galochka from './img/alliedge-galochka.svg'
 import time from './img/alliedge-time.svg'
 import team from './img/alliedge-team.svg'
 import cash from './img/alliedge-cash.svg'

function Extrience() {
  return (
    <div>
       <section className='exprience'>
        <div className="container">
          <h1 className='exprience__title'>Our <span>Expertise</span></h1>

          <ul className='experience__list'>
            {/* 1 */}
            <li className='experience__item border__radius'>
              <img width src={galochka} alt="" />
              <h3>Quality Assurance</h3>
              <p>Our commitment to <br />
                quality enables us to <br />
                deliver software solution <br />
                that are only functional, <br />
                but also user-friendly, <br />
                reliable, secure, provides <br />
                expectational customer <br />
                satisfaction</p>
            </li>
            {/* 2*/}
            <li className='experience__item'>
            <img width src={time} alt="" />
              <h3>On time delivery</h3>
              <p>Our commitment to <br />
                quality enables us to <br />
                deliver software solution <br />
                that are only functional, <br />
                but also user-friendly, <br />
                reliable, secure, provides <br />
                expectational customer <br />
                satisfaction</p>
            </li>
            {/* 3 */}
            <li className='experience__item'>
            <img width src={team} alt="" />
              <h3>Advanced technical</h3>
              <p>Our commitment to <br />
                quality enables us to <br />
                deliver software solution <br />
                that are only functional, <br />
                but also user-friendly, <br />
                reliable, secure, provides <br />
                expectational customer <br />
                satisfaction</p>
            </li>
            {/* 4 */}
            <li className='experience__item border__top__right'>
            <img src={cash} alt="" />
              <h3>Budget friendly</h3>
              <p>Our commitment to <br />
                quality enables us to <br />
                deliver software solution <br />
                that are only functional, <br />
                but also user-friendly, <br />
                reliable, secure, provides <br />
                expectational customer <br />
                satisfaction</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Extrience