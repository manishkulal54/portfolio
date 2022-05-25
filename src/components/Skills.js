import React from 'react'
import '../StylingSheets/Skills.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// AOS.init();
AOS.init({
  offset: 250,
  duration: 500,
  mirror: true,
  once: false
})

export default function Skills(props) {
    const skillsStyleLight={
        background:'rgb(19, 15, 15)',
        height:'100px'
    }
    if(props.mode==='dark'){
        skillsStyleLight.background='rgb(19, 15, 15)'
    }
    else{
        skillsStyleLight.background='#fafafa'
    }
    return (
        <>
            <div className="skills-container" id='skills' >
                <h2>Skills And Experience</h2>
                <div className="progress-div">
                    <div className="progress mt-3" style={skillsStyleLight} data-aos="fade-right">
                        <span className={`${props.mode==='dark'?'lightColor':'darkColor'}`}>HTML 5</span><div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                    </div>  
                    <div className="progress mt-3 " style={skillsStyleLight} data-aos="fade-right">
                        <span className={`${props.mode==='dark'?'lightColor':'darkColor'}`}>CSS 3</span><div className="progress-bar" role="progressbar" style={{width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                    <div className="progress mt-3 " style={skillsStyleLight} data-aos="fade-right">
                        <span className={`${props.mode==='dark'?'lightColor':'darkColor'}`}>Javascript</span><div className="progress-bar" role="progressbar" style={{width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                    </div>
                    <div className="progress mt-3 " style={skillsStyleLight} data-aos="fade-right">
                        <span className={`${props.mode==='dark'?'lightColor':'darkColor'}`}>ReactJS</span><div className="progress-bar" role="progressbar" style={{width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                    </div>
                    <div className="progress mt-3 " style={skillsStyleLight} data-aos="fade-right">
                        <span className={`${props.mode==='dark'?'lightColor':'darkColor'}`}>python</span><div className="progress-bar" role="progressbar" style={{width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                    </div>
                    <div className="progress mt-3 " style={skillsStyleLight} data-aos="fade-right">
                        <span className={`${props.mode==='dark'?'lightColor':'darkColor'}`}>c </span><div className="progress-bar" role="progressbar" style={{width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>
                    <div className="progress mt-3 " style={skillsStyleLight} data-aos="fade-right">
                        <span className={`${props.mode==='dark'?'lightColor':'darkColor'}`}>c++</span><div className="progress-bar" role="progressbar" style={{width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20%</div>
                    </div>
                    <div className="progress mt-3 " style={skillsStyleLight} data-aos="fade-right">
                        <span className={`${props.mode==='dark'?'lightColor':'darkColor'}`}>Mongoose</span><div className="progress-bar" role="progressbar" style={{width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
                    </div>
                    <div className="progress mt-3 " style={skillsStyleLight} data-aos="fade-right">
                        <span className={`${props.mode==='dark'?'lightColor':'darkColor'}`}>PHP</span><div className="progress-bar" role="progressbar" style={{width: '10%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">10%</div>
                    </div>
                    <div className="progress mt-3 " style={skillsStyleLight} data-aos="fade-right">
                        <span className={`${props.mode==='dark'?'lightColor':'darkColor'}`}>Editing</span><div className="progress-bar" role="progressbar" style={{width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                    </div>
                    <div className="progress mt-3 " style={skillsStyleLight} data-aos="fade-right">
                        <span className={`${props.mode==='dark'?'lightColor':'darkColor'}`}>Bootstrap</span><div className="progress-bar" role="progressbar" style={{width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                    </div>
                </div>
            </div>

        </>
    )
}
