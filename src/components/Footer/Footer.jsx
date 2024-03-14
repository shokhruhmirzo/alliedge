import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
  render() {
    return (
      <div>
           <footer>
        <div className="container">
         <div className="footer__container">
           {/* 1 */}
           <div className="footer__div">
            <a className='logo footer__logo' href="#">
             {/* <img src={logo} alt="" /> */}
             <p>Alliedge <br />
              <span>Technologies</span></p>
            </a>

            {/* <img className='websites' src={websites} alt="" /> */}
          </div>

          {/* 2 */}
          <div className="footer__div">
            <h2>Services</h2>
            <p>Software Development</p>
            <p>E-Commerce</p>
            <p>Artificial Intelligence</p>
            <p>Cloud Computing</p>
          </div>


          {/* 3 */}
          <div className="footer__div">
            <h2>Contact Us</h2>
            <p>Navrangpura, Ahmedabad <br />
              Gujarat</p>
            <p>Deep Paanchal</p>
            <p>+91 9913204659</p>
            <p>alliedge.technology@gmail.com</p>
            <p>Contact Us</p>
          </div>


          {/* 4 */}
          <div className="footer__div">
            <h2>Company</h2>
            <p>Home</p>
            <p>Services</p>
            <p>Technologies</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
         </div>

         <p className='footer__text'>© Copyright 2023, created by shokhruh</p>
        </div>

      </footer>
      </div>
    )
  }
}

export default Footer