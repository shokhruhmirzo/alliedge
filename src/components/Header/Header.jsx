import React from 'react'
import './Header.css'
import logo from './img/alliedge-logo.svg'
import { Link } from 'react-router-dom'

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
                  <Link to='/'>Home</Link>
                </li>
                <li className='header__item'>
                <Link to='/aboutpage'>About</Link>
                </li>
                <li className='header__item'>
                <Link to='/contact'>Contact</Link>
                </li>
                <li className='header__item'>
                <Link to='/'>Technology</Link>
                </li>
                <li className='header__item'>
                <Link to='/'>Group Compnies</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        </div>
    )
}

export default Header