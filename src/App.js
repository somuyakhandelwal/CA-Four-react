import React, {useState} from "react";
import "./App.css";
import QuestionBox from "./components/QuestionBox";


function App() {
  let [color,setcolor]=useState(true)
  let[BackGroundColour,setBackGroundColour]=useState('')
  let[textColor,settextColor]=useState('')

  
  function backgroundchange(){
    setcolor(!color)
    let white='#FFFFFF'
    let gray='#4d4d4d'
    let black='#000000'
    setBackGroundColour(color?gray:white)
    settextColor(color?white:black)

  }

  return (
    <div style={{background: BackGroundColour }} className="body">
      <div className="heading">
        <h1 style={{color: textColor}}>Kalvium</h1>
        <button onClick={backgroundchange} className="theme">{color?'Light':'Dark'}</button>
      </div>
      <div className="questionCard">
        <QuestionBox />
      </div>
      
    </div>

  );
}

export default App;