import React from 'react'
import { useState } from 'react'
import './Signup.css'
import { RiEyeFill,RiEyeCloseFill } from "react-icons/ri";
import { apiurl } from './Apiurl';
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import { Link, Navigate } from 'react-router-dom';

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
    const [tologin,settologin]=useState(false)
    const toast = useToast()
    
    const handleuser=(e)=>{
        const {name,value}=e.target
        setuser({...user,[name]:value})
    }

    const registeruser=()=>{
        axios({
            method:'post',
            url:`${apiurl}/register`,
            data:user
        })
        .then((res)=>{
            if(res.data.status==='success'){
                toast({
                    title: `Sign Up successful`,
                    position: 'top',
                    status:'success',
                    isClosable: true,
                  })
                  settologin(true)
                 
            }else{
                  toast({
                    title: 'Cannot create account try again',
                    position: 'top',
                    status:'error',
                    isClosable: true,
                  })
            }
        })
        .catch((err)=>{
            // console.log(err)
            toast({
                title: 'Please try again',
                position: 'top',
                status:'error',
                isClosable: true,
              })
        })
    }

    if(tologin){
        return <Navigate to="/login"/>
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
                <p>Already have account? <Link to='/login'><span>Login</span></Link></p>
            </div>
        </div>
    </div>
  )
}

export default Signup