import React from 'react'
import './Group.css'


function Group() {
  return (
    <div>
      <section className='group'>
        <div className="container">
          <h1 className='group__title'>Meet <span>Alliedge Group</span></h1>

          <div className="group__flex">
            {/* 1 */}
            <div className="group__div">
              <h2 className='group__div__title'>Alliedge Tech</h2>
              <a className='group__link' href="#">visit site
              {/* <img src={strelka} alt="" /> */}
              </a>
              <p className='group__text'>Software Based Company </p>
              <p className='group__text__two'>Powered by Alliedge</p>
            </div>

            {/* 2 */}
            <div className="group__div">
              <h2 className='group__div__title'>Alliedge Tech</h2>
              <a className='group__link' href="#">visit site
              {/* <img src={strelka} alt="" /> */}
              </a>
              <p className='group__text'>Software Based Company </p>
              <p className='group__text__two'>Powered by Alliedge</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Group