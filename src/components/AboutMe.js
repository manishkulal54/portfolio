import React from 'react'
import '../StylingSheets/AboutMe.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// AOS.init();
AOS.init({
  offset: 350,
  duration: 500,
  mirror: false,
  once: true
})

export default function AboutMe(props) {
  return (
      <div className={`aboutme-container ${props.mode === 'dark' ? 'darkMode' : 'lightMode'}`} id='aboutme'>
        <div className="aboutme-container_aos" data-aos='fade-up'>
          <div className="text">
            <h2 className='h2'>I'm <span>M</span>ANISH <span>K</span>ULAL</h2>
          </div>
          <div className='detail'>
            
            <p>
              <span>&#8221;</span> My portfolio is a representation of all that I've learned and accomplished as a Web Developer
            <span>&#8221;</span>
            </p>
          </div>
          <div className={`detail ${props.mode === 'dark' ? 'darkMode' : 'lightMode'}`}>
            <p>
            <span>&#8221;</span>
            I offer website of almost all type with frontend and backend services
            <span>&#8221;</span>
            </p>
          </div>
          <div className="links">

          </div>
        </div>
      </div>
  )
}
