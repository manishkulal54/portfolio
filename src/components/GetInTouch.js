import React, { useState } from 'react'
import '../StylingSheets/GetInTouch.css'

export default function GetInTouch(props) {

  const [gitEmail, setGitEmail] = useState('')
  const [gitName, setGitName] = useState('')
  const [gitStatus, setGitStatus] = useState('')
  
  const handleOnChangeGitEmail = (e) => {
    setGitEmail(e.target.value)
  }
  const handleOnChangeGitName = (e) => {
    setGitName(e.target.value)
  }



  const handleGitSubmit = async (e) => {
    e.preventDefault()
    if (gitEmail!=='' && gitName!==''){
    setGitStatus('You are now connected with us')
    }
    else{
      setGitStatus('Cannot empty')
    }
  }

  return (
    <>
      <div className={`git-container  ${props.mode === 'dark' ? 'darkMode' : 'lightMode'}`}>
        <h2>Get in Touch with us</h2>
        <div className={`form ${props.mode === 'dark' ? 'darkMode' : 'lightMode'}`}>
          <form className={`form-data ${props.mode === 'dark' ? 'darkMode' : 'lightMode'}`}>
            <input
              type="email"
              name=""
              id=""
              placeholder='Your email please'
              onChange={handleOnChangeGitEmail}
              value={gitEmail}
              className={`${props.mode==='dark'?'darkID':'lightID'}`}
            />
            <input
              type="name"
              name=""
              id=""
              placeholder='Enter your sweet name'
              onChange={handleOnChangeGitName}
              value={gitName}
              className={`${props.mode==='dark'?'darkID':'lightID'}`}
            />
            <span className={`${props.mode === 'dark' ? 'inputph' : ''}`}>{gitStatus}</span>
            <button
              id='submit-git'
              onClick={handleGitSubmit}
            className={`${props.mode === 'dark' ? 'inputph' : ''}`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
