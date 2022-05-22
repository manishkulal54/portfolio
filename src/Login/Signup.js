import React, { useState } from 'react'
import '../StylingSheets/Login.css'
import { Link, Outlet } from 'react-router-dom'
import '../StylingSheets/Login.css'
import ModeToggler from '../components/ModeToggler'

const URL='mongodb+srv://myPortfolio:NFfrqAmI9UVeO81S@cluster0.eq7sb.mongodb.net/portfolio?retryWrites=true&w=majority'

export default function Signup(props) {

	const [RfName, setRfName] = useState('')
	const [RlName, setRlName] = useState('')
	const [Rgender, setRgender] = useState('male')
	const [RphNo, setRphNo] = useState('')
	const [REmail, setREmail] = useState('')
	const [RPass, setRPass] = useState('')
	const [R_Re_Pass, setR_Re_Pass] = useState('')
	const [registerError, setRegisterError] = useState('')

	const onchangeRfName = (e) => {
		setRfName(e.target.value)
	}
	const onchangeRlName = (e) => {
		setRlName(e.target.value)
	}
	const onchangeRphNo = (e) => {
		setRphNo(e.target.value)
	}
	const onchangeREmail = (e) => {
		setREmail(e.target.value)
	}
	const onchangeRPass = (e) => {
		setRPass(e.target.value)
		setRegisterError("")
	}
	const onchangeR_Re_Pass = (e) => {
		setR_Re_Pass(e.target.value)
		setRegisterError("")
	}


	const submitRform = async (e) => {

		e.preventDefault()


		if (RPass !== R_Re_Pass) {
			setRegisterError('Password is not matching')
			setTimeout(() => {
				setRegisterError('')
			}, 5000)
		}
		else if (typeof (RfName) != 'string') {
			setRegisterError('First Name should be in String format')
		}
		else if (typeof (RlName) != 'string') {
			setRegisterError('Last Name should be in String format')
		}
		else if (RfName === '' || RlName === '' || Rgender === '' || RphNo === '' || REmail === '' || RPass === '') {
			setRegisterError('fill all the input places')
		}
		else if (RphNo.toString().length !== 10) {
			setRegisterError('mobile number should be 10 digit')
		}
		else if (RPass.toString().length <= 6) {
			setRegisterError('password must contain minimum 6 characters')
		}
		else {
			const response = await fetch("http://localhost:3001/api/signup", {
			// const response = await fetch(URL,{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					RfName,
					RlName,
					Rgender,
					RphNo,
					REmail,
					RPass
				}),
			})
			const data = await response.json()
			if (data.status === 'error') {
				setRegisterError(data.error)
			}
			else {
				
				setRegisterError("Submitted")
				window.location.href = '/login'
			}

		}
	}

	const resetRForm = () => {
		setRfName('')
		setRlName('')
		setRgender('')
		setRphNo('')
		setREmail('')
		setRPass('')
		setR_Re_Pass('')
	}


	window.onkeydown = (e) => {
		if (e.key === 'Enter')
			submitRform()
		if (e.key === 'Alt')
			resetRForm()
	}

	return (
		<>
			<div className='signup-container'>
				<div style={{ position: 'absolute', right: '0px' }}>
					<ModeToggler toggleMode={props.toggleMode} mode={props.mode} />
				</div>
				<section className={`h-100 bg-light-${props.mode === 'dark' ? 'dark' : 'light'}`}>
					<div className="container py-5 h-100">
						<div className="row d-flex justify-content-center align-items-center h-100">
							<div className="col">
								<div className="card card-registration my-4" id='cardRegistration'>
									{/* <Link to='/home'>Continue without logging in</Link> */}
									<div className={`row g-0 ${props.mode === 'dark' ? 'backDarkMode' : 'backLightMode'}`}>
										{/* <div className="col-xl-6 d-none d-xl-block text-center" >
                      <img
                        src={img}
                        alt="Sample photo"
                        className="img-fluid"
                        style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: ' .25rem',border:'2px solid black' }}
                      />
                    </div> */}
										<div className="col-xl-6">
											<div className={`card-body p-md-5 text-black bg-light-${props.mode === 'dark' ? 'lightColor backDarkMode' : 'darkColor backLightMode'}`}>
												<h3 className={`mb-5 text-uppercase ${props.mode === 'dark' ? 'lightColor' : 'darkColor'}`}>SignUp</h3>

												<div className="row ">
													<div className="col-md-6 mb-4">
														<div className="form-outline">
															<input
																type="text"
																id="form3Example1m"
																className="form-control form-control-lg"
																value={RfName}
																onChange={onchangeRfName}
															/>
															<label className={`form-label ${props.mode === 'dark' ? 'lightColor' : 'darkColor'}`}
																htmlFor="form3Example1m">First name</label>
														</div>
													</div>
													<div className="col-md-6 mb-4">
														<div className="form-outline">
															<input
																type="text"
																id="form3Example1n"
																className="form-control form-control-lg"
																value={RlName}
																onChange={onchangeRlName}
															/>
															<label className={`form-label ${props.mode === 'dark' ? 'lightColor' : 'darkColor'}`} htmlFor="form3Example1n">Last name</label>
														</div>
													</div>
												</div>

												<div className="d-md-flex justify-content-center align-items-center mb-4 py-2">

													<h6 className={`mb-0 me-4 ${props.mode === 'dark' ? 'lightColor' : 'darkColor'}`}>Gender: </h6>

													<div className="form-check form-check-inline mb-0 me-4">
														<input
															className="form-check-input cur-pointer"
															type="radio"
															name="inlineRadioOptions"
															id="femaleGender"
															value="Female"
															onChange={e => setRgender(e.target.value)}
														/>
														<label className={`form-label cur-pointer ${props.mode === 'dark' ? 'lightColor' : 'darkColor'}`} htmlFor="femaleGender">Female</label>
													</div>

													<div className="form-check form-check-inline mb-0 me-4">
														<input
															className="form-check-input cur-pointer"
															type="radio"
															name="inlineRadioOptions"
															id="maleGender"
															value="Male"
															onChange={e => setRgender(e.target.value)}
														/>
														<label className={`form-label cur-pointer ${props.mode === 'dark' ? 'lightColor' : 'darkColor'}`} htmlFor="maleGender">Male</label>
													</div>

													<div className="form-check form-check-inline mb-0">
														<input
															className="form-check-input cur-pointer"
															type="radio"
															name="inlineRadioOptions"
															id="otherGender"
															value="Others"
															onChange={e => setRgender(e.target.value)}
														/>
														<label className={`form-label cur-pointer ${props.mode === 'dark' ? 'lightColor' : 'darkColor'}`} htmlFor="otherGender">Other</label>
													</div>

												</div>


												<div className="form-outline mb-4">
													<input
														type="text"
														id="form3Example9"
														className="form-control form-control-lg"
														value={RphNo}
														onChange={onchangeRphNo}
													/>
													<label className={`form-label ${props.mode === 'dark' ? 'lightColor' : 'darkColor'}`} htmlFor="form3Example9">Phone number</label>
												</div>
												<div className="form-outline mb-4">
													<input
														type="email"
														id="form1Example13"
														className="form-control form-control-lg"
														value={REmail}
														onChange={onchangeREmail}
													/>
													<label className={`form-label ${props.mode === 'dark' ? 'lightColor' : 'darkColor'}`} htmlFor="form1Example13">Email address</label>
												</div>

												<div className="form-outline mb-4">
													<input
														type="password"
														id="form1Example23"
														className="form-control form-control-lg"
														value={RPass}
														onChange={onchangeRPass}
													/>
													<label className={`form-label ${props.mode === 'dark' ? 'lightColor' : 'darkColor'}`} htmlFor="form1Example23">Password</label>
												</div>

												<div className="form-outline mb-4">
													<input
														type="password"
														id="form1Example24"
														className="form-control form-control-lg"
														value={R_Re_Pass}
														onChange={onchangeR_Re_Pass}
													/>
													<label className={`form-label ${props.mode === 'dark' ? 'lightColor' : 'darkColor'}`} htmlFor="form1Example24">Repeat Password</label>
												</div>
												<span className={` ${props.mode === 'dark' ? 'lightColor' : 'darkColor'}`}>{registerError}</span>


												<div className="d-flex justify-content-around pt-3">
													<button type="button" className="btn btn-light btn-lg" onClick={resetRForm}>Reset all</button>
													<button type="button" className="btn btn-warning btn-lg ms-2" onClick={submitRform}>Submit form</button>
												</div>

											</div>
										</div>
										<h5 className={`mb-3 ${props.mode === 'dark' ? 'lightColor backDarkMode' : 'darkColor backLightMode'}`}> Already have an account <Link to="/login">Login</Link> </h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Outlet />
			</div>
		</>
	)
}
