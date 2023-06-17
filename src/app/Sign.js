"use client"
import React, { useState } from 'react'
import SignIn  from './SignIn'
import SignUp from './SignUp'

//Credentials :  E-Mail: test@test.com , Password: 123456

function Sign() {

  const [toggle,setToggle] = useState(true)

  const setFasle = () => {
    setToggle(false)
  }

  const setTrue = () => {
    setToggle(true)
  }

  return (
    <div className='sign_box'>
      <img src='https://tse1.mm.bing.net/th?id=OIP.5Wd_KmWH28VkaJ1qyoeVygHaB4&pid=Api&P=0&h=180'></img>
      {toggle ? <SignIn /> : <SignUp />}
      <button onClick={setTrue}>SignIn</button>
      <button onClick={setFasle}>SignUp</button>
    </div>
  )
}

export default Sign