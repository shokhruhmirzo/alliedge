import React from 'react'
import iconone from './img/services__icon.svg'
import icontwo from './img/icons__two.svg'
import shadow from './img/shadow.svg'
import './Contacthero.css'


function Contacthero() {
    return (
        <div>
            {/* hero */}
            <section className='about__hero contact__hero'>
                <div className="container">
                    <h1 className='about__hero__title'>Expand your <br />
                        coverage with <span> Alliedge.</span></h1>
                    <p className='about__hero__text'>Customer satisfaction is at the heart of everything we do.We are committed to  providing exceptional IT services <br />
                        that exceed your expectations and help you  achieve your business goals.</p>
                    <button className='about__hero__btn'>Let’s connect</button>
                </div>
            </section>

            {/* services */}
            <section className='services'>
                <div className="container">
                    <h1 className='services__title'>Our Services</h1>

                        {/* 1 */}

                    <div className="services__div">
                        <div className="services__left">
                            <img src={iconone} alt="" />
                        </div>
                        <div className="services__right">
                            <h2>Innovative Hardware Design Engineering</h2>
                            <p>In the changing business scenarios product companies expected  <br />
                                to provide increasing value to end-customers. Product demands <br />
                                great reliability with best Embedded hardware design at lowest cost <br />
                                in the shortest timeline. Radixweb, with defined Embedded hardware <br />
                                development process and domain expertise, help companies achieve <br />
                                product development objectives successfully</p>
                        </div>
                    </div>

                           {/* 2 */}
                        
                           <div className="services__div">
                        <div className="services__right">
                            <h2>Innovative Hardware Design Engineering</h2>
                            <p>In the changing business scenarios product companies expected  <br />
                                to provide increasing value to end-customers. Product demands <br />
                                great reliability with best Embedded hardware design at lowest cost <br />
                                in the shortest timeline. Radixweb, with defined Embedded hardware <br />
                                development process and domain expertise, help companies achieve <br />
                                product development objectives successfully</p>
                        </div>
                        <div className="services__left">
                            <img src={icontwo} alt="" />
                        </div>
                    </div>

                         {/* 3 */}

                         <div className="services__div">
                        <div className="services__left">
                            <img src={iconone} alt="" />
                        </div>
                        <div className="services__right">
                            <h2>Innovative Hardware Design Engineering</h2>
                            <p>In the changing business scenarios product companies expected  <br />
                                to provide increasing value to end-customers. Product demands <br />
                                great reliability with best Embedded hardware design at lowest cost <br />
                                in the shortest timeline. Radixweb, with defined Embedded hardware <br />
                                development process and domain expertise, help companies achieve <br />
                                product development objectives successfully</p>
                        </div>
                    </div>

                           {/* 4 */}
                        
                           <div className="services__div">
                        <div className="services__right">
                            <h2>Innovative Hardware Design Engineering</h2>
                            <p>In the changing business scenarios product companies expected  <br />
                                to provide increasing value to end-customers. Product demands <br />
                                great reliability with best Embedded hardware design at lowest cost <br />
                                in the shortest timeline. Radixweb, with defined Embedded hardware <br />
                                development process and domain expertise, help companies achieve <br />
                                product development objectives successfully</p>
                        </div>
                        <div className="services__left">
                            <img src={icontwo} alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Contacthero