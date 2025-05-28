import React,{useState,useContext} from "react";

import UserContext from "../context/UserContext";

export default function Login(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const {setUser} =useContext(UserContext)
    const handleSubmit=(e)=>{
           e.preventDefault()
           setUser({username,password})
    }
    return(
        <div>
            <h2>Login</h2>
            <input 
            className="bg-gray-200 border border-gray-300 rounded p-2 mb-4"
            type='text' 
            value={username}
            onChange={(ep)=> setUsername(ep.target.value)}
            placeholder='Username' />
              <input 
              className="bg-gray-200 border border-gray-300 rounded p-2 mb-4"
              type='text' 
               value={password}
               onChange={(ep)=> setPassword(ep.target.value)}
               placeholder='Password' />
              <button
              className="bg-blue-500 text-white rounded p-2"
              onClick={handleSubmit}>Submit</button>
        </div>
    )
}