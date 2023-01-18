import React from 'react'
import { useState } from 'react'
import './Signup.css'
import { RiEyeFill,RiEyeCloseFill } from "react-icons/ri";

const initialsate={
    username:"",
    email:"",
    mobile_no:"",
    role:"user",
    password:""
}

const Signup = () => {
    const [pass,setpass]=useState(false)
    const [user,setuser]=useState(initialsate)
    
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
                <input type="text" name='email' value={email} placeholder='Email' onChange={handleuser}/>
                <input type="text" name='mobile_no' value={mobile_no} placeholder='Mobile number' onChange={handleuser}/>
                <div>
                    <input type={pass?"text":"password"} name='password' value={password} placeholder='Password' onChange={handleuser}/>
                    <i onClick={()=>setpass(!pass)}>{pass?<RiEyeCloseFill/>:<RiEyeFill/>}</i>
                </div>
                <button className='button' onClick={registeruser}>Sign Up</button>
                <p>Already have account? <span>Login</span></p>
            </div>
        </div>
    </div>
  )
}

export default Signup