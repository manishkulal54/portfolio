import React, { useState } from 'react'
import '../StylingSheets/Login.css'
import { Link, Outlet } from 'react-router-dom'
import ModeToggler from '../components/ModeToggler'

export default function Signin(props) {

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPass, setLoginPass] = useState('')
  const [loginError, setLoginError] = useState('')

  const onchangeLEmail = (e) => {
    setLoginEmail(e.target.value)
  }
  const onchangeLPass = (e) => {
    setLoginPass(e.target.value)
  }

  const onLogin = async (e) => {
    e.preventDefault()
    if (loginEmail === '' || loginPass === '') {
      setLoginError('Fill all the fields')
    }
    else {
      const response = await fetch("http://localhost:3001/api/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          loginEmail,
          loginPass
        })
      })
      const data = await response.json()
      if (data.status == 'error') {
        setLoginError(data.error)
      }
      else {
        setLoginError('Login sucessfull')
        sessionStorage.setItem('loginStatus', 'True')
        window.location.href = '/home'
      }
    }
  }
  
  window.onkeydown=(e)=>{
    if(e.key==='Enter')
    onLogin()
   }
  return (
    <>
      <div style={{ position: 'absolute', right: '0px' }}>
        <ModeToggler toggleMode={props.toggleMode} mode={props.mode} />
      </div>
      <section className="vh-100">
        <div className="container py-5 h-100 ">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid " alt="Phone image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                {/* <p className='text-center'><Link to='/home'>Continue without logging in</Link></p> */}

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    value={loginEmail}
                    onChange={onchangeLEmail}
                  />
                  <label className="form-label" htmlFor="form1Example13">Email address</label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                    value={loginPass}
                    onChange={onchangeLPass}
                  />
                  <label className="form-label" htmlFor="form1Example23">Password</label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <a href="#!">Forgot password?</a>
                </div>
                <div className="d-flex justify-content-around align-items-center mb-4">
                  <span className='text-center'>{loginError}</span>
                </div>

                <button type="submit" onClick={onLogin} className="btn btn-primary btn-lg btn-block">Sign in</button>
              </form>
              <h6 className='text-center'>New User <Link to='/signup'>Create account</Link></h6>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  )
}
