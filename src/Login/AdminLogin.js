import React, { useState } from 'react'

export default function AdminLogin() {

    const [adminName, setAdminName] = useState('')
    const [adminPass, setAdminPass] = useState('')
    const [adminLockScreen, setAdminLockScreen] = useState('flex')
    const [adminMainScreen, setAdminMainScreen] = useState('none')
    const myAdminStyle = {
        display: adminLockScreen,
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const disStyle={
        display:adminMainScreen
    }
    
    const onAdminName = (e) => {
        setAdminName(e.target.value)
    }
    const onAdminPass = (e) => {
        setAdminPass(e.target.value)
    }
    const adminLogin = async() => {
        if (adminName === 'Admin' && adminPass === 'pass') {
            setAdminLockScreen('none')
            setAdminMainScreen('block')
            sessionStorage.setItem('loginStatus', 'True')
        }
        else{
            setAdminLockScreen("flex")
            setAdminMainScreen('none')
            sessionStorage.setItem('loginStatus','False')
        }
    }
   window.onkeydown=(e)=>{
    if(e.key==='Enter')
    adminLogin()
   }
    return (
        <>
            <div className={`container `} style={myAdminStyle}>
                <label className='m-2' htmlFor="AdminUsNm">Username
                    <input
                        type="text"
                        name=""
                        id="AdminUsNm"
                        value={adminName}
                        onChange={onAdminName}
                    /></label>
                <label className='m-2' htmlFor="Adminpass">Password
                    <input
                        type="password"
                        name=""
                        id="Adminpass"
                        value={adminPass}
                        onChange={onAdminPass}
                    /></label>
                <button  
                style={{
                    width:'100px',
                    height:'30px',
                    border:'2px solid black',
                    margin:'10px auto'
                }}
                onClick={adminLogin
                }>
                Login
                </button>
            </div>
            <div  className={`container`} style={disStyle}>
                hello world welcome to the world
            </div>
        </>
    )
}
