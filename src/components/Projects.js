import React from 'react'
import beginningImg from '../Images/beginningImg.jfif'
import Navbar from './Navbar'
import ModeToggler from './ModeToggler'

export default function Projects(props) {
    return (
        <>
            <div className="container">
                <div className="hamburger-pos" style={{ top: '15px' }}>
                    <Navbar mode={props.mode} />
                </div>
                <div className="toggleMode">
                    <ModeToggler toggleMode={props.toggleMode} mode={props.mode} />
                </div>
                <h2 className='mb-5' >PROJECTS</h2>
                <div className="container d-flex">
                    {/* copy from here */}
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={beginningImg} className="card-img-top" alt="Beginning project" />
                        <div className="card-body">
                            <h5 className="card-title ">Beginning project</h5>
                            <p className="card-text">It contains many sub project</p>
                            <a href="https://bbqlnow0karreseypovyxq.on.drv.tw/mywebsite/main.html" target='norefference' className="btn btn-primary ">Open Project</a>
                        </div>
                    </div>
                    {/* till here */}
                </div>
            </div>
        </>
    )
}
