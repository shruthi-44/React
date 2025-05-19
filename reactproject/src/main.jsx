import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function App1(){
  return(
    <h1>Shruthi desktop</h1>
  )
}
const user='Shruthi';
//to create an element in react
const element=React.createElement(
  'a',// Create an anchor element
  {href:'https://www.google.com',target:'_blank'},//attributes
  'Click me to visit Google',//inner text
  user//passing a variable
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App1/>
    {element}
  </StrictMode>,
)
