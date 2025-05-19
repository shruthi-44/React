import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
  // let counter=15
  const addval=()=>{
    // counter++;
    if(counter<20){
    setCounter(counter+1)
     setCounter(counter+1)
      setCounter(counter+1)
       setCounter(counter+1)
  }
}
  const subval=()=>{
    if(counter>0){
    setCounter(counter-1)
  }
}

  return (
    <>
     <h1>Web Developer</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addval} >Add value</button>
     <br/>
     <button onClick={subval}>remove value</button>
    </>
  )
}

export default App
