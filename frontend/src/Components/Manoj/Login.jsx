import React from 'react'
import { useState } from 'react'
import './Signup.css'
import { RiEyeFill,RiEyeCloseFill } from "react-icons/ri";
import { Globalcontext } from '../../Context/Context';
import { useContext } from 'react';

const initialsate={
    username:"",
    password:""
}

const Login = () => {
    const [pass,setpass]=useState(false)
    const [user,setuser]=useState(initialsate)
    const {token,settoken}=useContext(Globalcontext)

    const handleuser=(e)=>{
        const {name,value}=e.target
        setuser({...user,[name]:value})
    }

    const registeruser=()=>{

    }

    const {username,email,mobile_no,password}=user
  return (
    <div className='signup'>
        <div className='box'>
            <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="signup-box-image" />
            <div>
                <input type="text" name='username' value={username} placeholder='Username' onChange={handleuser} />
                <div>
                    <input type={pass?"text":"password"} name='password' value={password} placeholder='Password' onChange={handleuser}/>
                    <i onClick={()=>setpass(!pass)}>{pass?<RiEyeCloseFill/>:<RiEyeFill/>}</i>
                </div>
                <button className='button' onClick={registeruser}>Login</button>
                <button className='google'>Login with Google</button>
                <p>Dont't have account? <span>Sign Up</span></p>
            </div>
        </div>
    </div>
  )
}

export default Login