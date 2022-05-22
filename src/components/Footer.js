import React from 'react'
import '../StylingSheets/Footer.css'
import instagramImg from '../Images/icons/instagram.png'
import facebookImg from '../Images/icons/facebook.png'
import githubImg from '../Images/icons/github.png'
import linkedinImg from '../Images/icons/linkedin.png'
import whatsappImg from '../Images/icons/whatsapp.png'

export default function Footer(props) {
  return (
    <>
      <div className={`foot-container ${props.mode==='dark'?'footDarkMode':'footLightMode'}`}>
        <div className={`icons ${props.mode==='dark'?'footDarkMode':'footLightMode'}`}>
          <ul className={`${props.mode==='dark'?'inverter':'notInverter'}`}>
            <li><a href="https://www.facebook.com/manish.kulal.10004" target="noreferrer"><img src={facebookImg} alt="" /></a></li>
            <li><a href="https://www.instagram.com/manishkulal54/" target="noreferrer"><img src={instagramImg} alt="" /></a></li>
            <li><a href="https://www.linkedin.com/in/manish-kulal-530479170/" target="noreferrer"><img src={linkedinImg} alt="" /></a></li>
            <li><a href="https://github.com/manishkulal54" target="noreferrer"><img className='gittest' src={githubImg} alt="" /></a></li>
            <li><a href="https://wa.me/+919741933493" target="noreferrer"><img src={whatsappImg} alt="" /></a></li>
          </ul>
        </div>
        <div className="foot-info">
          <p> Didambettu 5-cents house palli karkala-taluk Udupi-district Karnataka state India -574244</p>
          <p>Contact me - <a href="tel:+919741933493"> 9741933493</a></p>
        </div>
        <div className="foot-texts">
          <div>
            © 2022 Copyright : manishkulal.com
          </div>
        </div>
      </div>

    </>
  )
}
