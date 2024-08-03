// import './App.css'
import { useEffect, useState } from 'react'
import Header from './Header'
import Movies from './Movies'
import Login from './Login';

function App() {

  const [userName, setUsername] = useState("");
 
   
  return (
    <>
     <Header user={userName} userName={userName} setUsername={setUsername}/>
     
     {
       userName ? <Movies/> : <Login setUsername={setUsername} />
     }
    </>  
  )
}

export default App
