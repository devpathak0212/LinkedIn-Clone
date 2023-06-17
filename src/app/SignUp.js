"use client"
import React,{ useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
import "./Sign.css"

export let Name

function SignUp() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const SignUpCall = async() => {
        const user = await createUserWithEmailAndPassword(auth,email,password)
    }

  return (
    <div className='inside_sign'>
      <h1>SignUp</h1>
        <input className='input' onChange = {(e)=>{setEmail(e.target.value)}} type="email" placeholder="E-mail"></input>
        <input className='input' onChange={(e)=>{Name = e.target.value}} placeholder='Username'></input>
        <input className='input' onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password"></input>
        <button className='button' onClick={SignUpCall}>SignUp</button>
    </div>
  )
}

export default SignUp