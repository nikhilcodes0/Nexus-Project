import React from 'react'
import pic from "./assets/logo.svg"

// import { Typography } from '@mui/material';

import "./Style/login.css"



function Login() {
  return (
    <div className='main'>
        <div className="sidebar">
            <div className="top">
                <h2>Sign In</h2>
                <h2>Manage Users, Accounts Books and more</h2>
            </div>
            <div className='btm'>
                <p>Go Green</p>
                <p>Embrace Savings</p>
            </div>
        </div>
        <div className="main-form">
            <img src={pic} alt="Logo" />
            
        </div>
    </div>
    
  )
}

export default Login