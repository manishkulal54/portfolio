import React from 'react'
import '../StylingSheets/Home.css'
import Typewriter from 'typewriter-effect';
import Navbar from './Navbar';
import ModeToggler from './ModeToggler';

export default function Home(props) {


  return ( 
    <>
      <div className="home-container">
        <div className="hamburger-in-home hamburger-pos">
          <Navbar mode={props.mode} />
        </div>
        <div className="toggleMode">
          <ModeToggler toggleMode={props.toggleMode} mode={props.mode}/>
        </div>
        <div className={`homeTexts ${props.mode === 'dark' ? 'darkMode' : 'lightMode'}`}>
          <div className="subTexts">
            <h2 className={`${props.mode === 'dark' ? 'darkMode' : 'lightMode'}`}>
              Hello...!
            </h2>
            <h2 className={`${props.mode === 'dark' ? 'darkMode' : 'lightMode'}`}>WELCOME TO THE <span>W</span>
              ORLD
            </h2>
          </div>
          <div className='home_autoTyping_word'>
            <span> I'm a</span>
            <Typewriter
              options={{
                strings: ['Programmer', 'Web designer', 'Web developer', 'Frontend designer', 'Coder', 'Backend designer', 'Full stack web developer',],
                autoStart: true,
                loop: true,
                pauseFor: 1000
              }}
            />
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className='home-b-svg' viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,192L48,192C96,192,192,192,288,160C384,128,480,64,576,58.7C672,53,768,107,864,149.3C960,192,1056,224,1152,202.7C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </> 
  )
}