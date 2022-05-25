import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import '../StylingSheets/Navbar.css'

export default function Hamburger(props) {
    window.onscroll=(e)=>{
        const scrollFromTopLength  = window.pageYOffset || document.documentElement.scrollTop
        // const left = window.pageXOffset || document.documentElement.scrollLeft;
        if (scrollFromTopLength>=500){
        setToggleclass('close')
            setIsDisNone("disNone")
        }
    }

    const [toggleclass, setToggleclass] = useState("")
    const [isDisNone, setIsDisNone] = useState("disNone")

    const changeClass = () => {
        if (toggleclass === 'open') {
            setToggleclass('close')
            setIsDisNone("disNone")
        }
        else {
            setToggleclass('open')
            setIsDisNone("disNotNone")
        }
    }

    return (
        <>
            <div className="hamburger-container">
                <div className={`hamburger hamburger-${props.mode === 'dark' ? 'dark' : 'light'} `} onClick={changeClass}>
                    <div className={`hamburgerSpan1 ${props.mode === 'dark' ? 'dark' : 'light'}-${toggleclass} ${toggleclass} hamburgerSpan1-${props.mode === 'dark' ? 'dark' : 'light'} `} >  </div>
                    <div className={`hamburgerSpan1 ${props.mode === 'dark' ? 'dark' : 'light'}-${toggleclass} ${toggleclass} hamburgerSpan1-${props.mode === 'dark' ? 'dark' : 'light'} `} >  </div>
                    <div className={`hamburgerSpan2 ${props.mode === 'dark' ? 'dark' : 'light'}-${toggleclass} ${toggleclass} hamburgerSpan2-${props.mode === 'dark' ? 'dark' : 'light'} `} >  </div>
                </div >
                <div className={`link_conatiner ${isDisNone} ${props.mode === 'dark' ? 'nav-dark-mode' : 'nav-light-mode'}`}  >
                    <ul id='linkContainer'>
                        <li>
                            <a id='link1' href="/" >Home</a>
                        </li>
                        <li >
                            <a id='link2' href="#aboutme" >About me</a>
                        </li>
                        <li>
                            <a id='link4' href="#skills" >Skills</a>
                        </li>
                        <li>
                            <a id='link3' href="#service" >Services</a>
                        </li>
                        <li>
                            <Link id='link5' to='/contact'>Contact us</Link>
                        </li>
                        <li>
                            <Link id='link5' to='/projects'>Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    )
}
