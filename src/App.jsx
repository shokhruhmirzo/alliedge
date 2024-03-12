import './App.css';

function App() {
  return (
    <div className="App">
      <section className='header__hero'>
        {/* header
         */}
        <header>
          <div className="container">
            <nav className='header__nav'>
              <a className='logo' href="#">
                Alliedge <br />
                <span>Technologies</span>
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

        {/* hero */}
        <section className='hero'>
          <div className="container">
            <h1 className='hero__title'>Expand your <br />
              coverage with <span> Alliedge.</span></h1>
            <p className='hero__text'>Customer satisfaction is at the heart of everything we do.We are committed to  providing exceptional IT services <br />
              that exceed your expectations and help you  achieve your business goals.</p>
            <button className='hero__btn'>Let’s connect</button>
          </div>
        </section>
      </section>

      {/* exprience */}
      <section className='exprience'>
        <div className="container">
          <h1 className='exprience__title'>Our <span>Expertise</span></h1>

          <ul className='experience__list'>
            {/* 1 */}
            <li className='experience__item border__radius'>
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

      {/* group */}

      <section className='group'>
        <div className="container">
          <h1 className='group__title'>Meet <span>Alliedge Group</span></h1>

          <div className="group__flex">
            {/* 1 */}
            <div className="group__div">
              <h2 className='group__div__title'>Alliedge Tech</h2>
              <a className='group__link' href="#">visit site</a>
              <p className='group__text'>Software Based Company </p>
              <p className='group__text__two'>Powered by Alliedge</p>
            </div>

            {/* 2 */}
            <div className="group__div">
              <h2 className='group__div__title'>Alliedge Tech</h2>
              <a className='group__link' href="#">visit site</a>
              <p className='group__text'>Software Based Company </p>
              <p className='group__text__two'>Powered by Alliedge</p>
            </div>
          </div>
        </div>
      </section>

      {/* about */}
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

      <footer>
        <div className="container">
         <div className="footer__container">
           {/* 1 */}
           <div className="footer__div">
            <a className='logo footer__logo' href="#">
              Alliedge <br />
              <span>Technologies</span>
            </a>
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
  );
}

export default App;
