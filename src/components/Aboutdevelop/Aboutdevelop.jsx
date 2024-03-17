import React from 'react'
import './Aboutdevelop.css'
import vscd from './img/develop-img.svg'
import nastroyka from './img/nastroyka.svg'
import computer from './img/computer.svg'
import phone from './img/phone.svg'
function Aboutdevelop() {
    return (
        <div>
            <section className='develop'>
               <img className='vscd' src={vscd} alt="" />
               <div className="container">
                <h1 className='develop__title'>WHAT CAN WE DO FOR YOU</h1>
                <p className='develop__text'>we develop softwares that helps millions of professionals</p>

                <div className="deveop__flex">
                    {/* left */}
                   <div className="develop__left">
                     {/* 1 */}
                     <div className="develop__div">
                        <img src={nastroyka} alt="" />
                        <h2 className='develop__div__title'>Web Development</h2>
                        <p className='develop__div__text'>We specialize in providing top-notch web <br />
                            development services to help businesses  <br />
                            establish a strong online presence and <br />
                            reach their target audience effectively.</p>
                    </div>
                     {/* 2 */}
                     <div className="develop__div">
                        <img src={computer} alt="" />
                        <h2 className='develop__div__title'>Software Devlopmet</h2>
                        <p className='develop__div__text'>We specialize in providing top-notch web <br />
                            development services to help businesses  <br />
                            establish a strong online presence and <br />
                            reach their target audience effectively.</p>
                    </div>
                     {/* 3 */}
                     <div className="develop__div">
                        <img src={nastroyka} alt="" />
                        <h2 className='develop__div__title'>Artificial Intelligent</h2>
                        <p className='develop__div__text'>We specialize in providing top-notch web <br />
                            development services to help businesses  <br />
                            establish a strong online presence and <br />
                            reach their target audience effectively.</p>
                    </div>
                   </div>

                   {/* right */}
                   <div className="develop__right">
                      {/* 1 */}
                      <div className="develop__div">
                        <img src={phone} alt="" />
                        <h2 className='develop__div__title'>Mobile Development</h2>
                        <p className='develop__div__text'>We specialize in providing top-notch web <br />
                            development services to help businesses  <br />
                            establish a strong online presence and <br />
                            reach their target audience effectively.</p>
                    </div>
                     {/* 2 */}
                     <div className="develop__div">
                        <img src={nastroyka} alt="" />
                        <h2 className='develop__div__title'>E-commerce Development</h2>
                        <p className='develop__div__text'>We specialize in providing top-notch web <br />
                            development services to help businesses  <br />
                            establish a strong online presence and <br />
                            reach their target audience effectively.</p>
                    </div>
                     {/* 3 */}
                     <div className="develop__div">
                        <img src={nastroyka} alt="" />
                        <h2 className='develop__div__title'>Cloud Computing</h2>
                        <p className='develop__div__text'>We specialize in providing top-notch web <br />
                            development services to help businesses  <br />
                            establish a strong online presence and <br />
                            reach their target audience effectively.</p>
                    </div>
                   </div>

                   <form action="#">

                    
                   </form>
                </div>

                
               
               </div>
            </section>
        </div>
    )
}

export default Aboutdevelop