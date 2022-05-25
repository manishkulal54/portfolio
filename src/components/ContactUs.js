import React, { useState } from 'react'
import Navbar from './Navbar'
import ModeToggler from './ModeToggler'

export default function ContactUs(props) {

    const [contactEmail, setContactEmail] = useState('')
    const [contactName, setContactName] = useState('')
    const [contactQuery, setContactQuery] = useState('')


    const handleOnEmailChange = (e) => {
        setContactEmail(e.target.value)
    }
    const handleOnNameChange = (e) => {
        setContactName(e.target.value)
    }
    const handleOnQueryChange = (e) => {
        setContactQuery(e.target.value)
    }

    const myStyle = {
        background: '#272a36',
        color: 'white'
    }
    if (props.mode === 'dark') {
        myStyle.background = '#272a36';
        myStyle.color = 'white'
    }
    else {
        myStyle.background = 'white';
        myStyle.color = 'black'
    }

    const handleContactSubmit = async (e) => {
        e.preventDefault()
        alert('contact is developing')
        window.location.href='/'
    }


    return (
        <>
            <div className="container mt-5 ">
                <div className="hamburger-pos" style={{ top: '15px' }}>
                    <Navbar mode={props.mode} />
                </div>
                <div className="toggleMode">
                    <ModeToggler toggleMode={props.toggleMode} mode={props.mode} />
                </div>
                <h1 className=' text-center' style={{ marginTop: '10vh' }}>Contact-Us</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        style={myStyle}
                        id="exampleFormControlInput1"
                        placeholder="Enter your Email address"
                        value={contactEmail}
                        onChange={handleOnEmailChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        style={myStyle}
                        id="exampleFormControlInput1"
                        placeholder="Enter your Name"
                        value={contactName}
                        onChange={handleOnNameChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Query</label>
                    <textarea
                        className="form-control"
                        style={myStyle}
                        id="exampleFormControlTextarea1"
                        rows="7"
                        placeholder='Enter your problem'
                        value={contactQuery}
                        onChange={handleOnQueryChange}
                    ></textarea>
                </div>
                <div className="d-grid gap-2 col-2 mx-auto">
                    <button
                        type="button"
                        className={`btn btn-outline-${props.mode === 'dark' ? 'light' : 'dark'} w-20`}
                        onClick={handleContactSubmit}
                    >Submit</button>
                </div>
            </div>
        </>
    )
}
