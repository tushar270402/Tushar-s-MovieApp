import React from 'react'
import "./Header.css"

const Header = (props) => {

   const { setUsername, userName} = props;
  return (
    <div  className='header'>
      <h3>Welcome to MoviesJoy!</h3>
      <h3>{props.user}</h3>
      {
        userName ? <button onClick={()=>setUsername("")}>Log out</button> : <></>
      }
    </div>
  )
}

export default Header
