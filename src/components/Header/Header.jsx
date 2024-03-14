import React from 'react'
import './Header.css'
import logo from './img/alliedge-logo.svg'

function Header(){
    return(
        <div>
             <header>
          <div className="container">
            <nav className='header__nav'>
              <a className='logo' href="#">
                <img width={90} src={logo} alt="" />
               <p> Alliedge <br />
                <span>Technologies</span></p>
              </a>

              <ul className='header__list'>

                <li className='header__item'>
                  <a href="#">Home</a>
                </li>
                <li className='header__item'>
                  <a href="#">Services</a>
                </li>
                <li className='header__item'>
                  <a href="#">Technology</a>
                </li>
                <li className='header__item'>
                  <a href="#">Group Compnies</a>
                </li>
                <li className='header__item'>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        </div>
    )
}

export default Header