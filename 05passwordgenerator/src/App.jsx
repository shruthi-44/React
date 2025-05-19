import { useState,useCallback, useEffect,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numbers,setNumbers]= useState(false)
  const [char,setChar]=useState(false)
  const [password,setPassword]=useState("")

  const passref=useRef(null)

  const handlecopy=useCallback(()=>{
    passref.current.select()
    passref.current.setSelectionRange(0,25)
    window.navigator.clipboard.writeText(password)
  },[password])

  const pwdgen=useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numbers) str+="0123456789"
    if(char) str+="!@#$%^&*()_+"
    for(let i=1;i<=length;i++){
       const ch=Math.floor(Math.random()*str.length+1)
       pass+=str.charAt(ch)
    }
    setPassword(pass)
  },[length,numbers,char,setPassword])

  useEffect(()=>{
    pwdgen()
  },[length,numbers,char,pwdgen])

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg shadow-md px-4 my-8 py-2  bg-gray-800">
  <h1 className="text-2xl font-bold text-center text-white py-2">Password Generator</h1>

  <div className="flex shadow rounded-lg mb-4 overflow-hidden border text-orange-500 border-gray-600">
    <input
      type="text"
      value={password}
      className="outline-none px-4 py-1 w-full bg-white text-black"
      placeholder="Your password will appear here"
      readOnly
      ref={passref}
    />
    <button className="outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0" onClick={handlecopy}>Copy</button>
  </div>
  <div className="flex text-sm gap-x-2">
    <div className="flex items-center gap-x-1">
      <input
      type="range"
      min={6}
      max={100}
      value={length}
      className="cursor-pointer"
      onChange={(e)=>setLength(e.target.value)}
      />
      <label>Length: {length}</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input
      type="checkbox"
      defaultChecked={numbers}
      id="numberInput"
      onChange={()=>{
        setNumbers((prev)=> !prev)
      }}/>
  <label htmlFor='numberInput'>Numbers</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input
      type="checkbox"
      defaultChecked={char}
      id="characterInput"
      onChange={()=>{
        setChar((prev)=>!prev)
      }}/>
  <label htmlFor='characterInput'>Characters</label>
    </div>
  </div>
</div>

    </>
  )
}

export default App
