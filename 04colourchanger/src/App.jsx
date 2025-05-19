import {useState} from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div
  className="w-full h-screen  flex items-center justify-center"
  style={{ backgroundColor: color }}
>
  <div className="fixed flex bottom-10 flex-wrap justify-center gap-6 bg-white shadow-lg rounded-xl px-4 py-2">
    <button className=" outline-none rounded-full px-4 py-1" onClick={()=> setColor("red")} style={{backgroundColor:"red"}}>Red</button>
    <button className=" outline-none rounded-full px-4 py-1" onClick={()=> setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
    <button className=" outline-none rounded-full px-4 py-1" onClick={()=> setColor("beige")} style={{backgroundColor:"beige"}}>Beige</button>
<button className=" outline-none rounded-full px-4 py-1" onClick={()=> setColor("green")} style={{backgroundColor:"green"}}>Green</button>
<button className=" outline-none rounded-full px-4 py-1" onClick={()=> setColor("lavender")} style={{backgroundColor:"lavender"}}>Lavender</button>
<button className=" outline-none rounded-full px-4 py-1" onClick={()=> setColor("yellow")} style={{backgroundColor:"yellow"}}>Yellow</button>

    </div></div>    </>
  )
}

export default App
