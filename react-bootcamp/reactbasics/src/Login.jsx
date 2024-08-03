import React, { useState } from 'react'
import './Login.css'

const Login = (props) => {

    const {setUsername} = props
    const [input, setInput] = useState("")

  return (
    <div className='login'>
        <h2>Enter Your Name</h2>
      <input type='text' value={input} onChange={(e)=>{ 
        setInput(e.target.value)
      }}/>
      <button onClick={()=>{
        setUsername(input)
      }}>Log In</button>
    </div>
  )
}

export default Login
