"use client"
import React, { useState } from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from './firebase'
import "./Sign.css"

function SignIn() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const SignInCall = async() => {
    try{
      const user = await signInWithEmailAndPassword(auth,email,password)
      console.log(user)
    }
    catch(e){
      console.log(e.message)
    }

  }

  return (
    <div className='inside_sign'>
      <h1>SignIn</h1>
        <input className='input' placeholder='E-mail' type='email' onChange={(e)=>{setEmail(e.target.value)}}></input>
        <input className='input' placeholder='Password' type='password' onChange={(e)=>{setPassword(e.target.value)}}></input>
        <button className='button' onClick={SignInCall}>SignIn</button>
    </div>
  )
}

export default SignIn