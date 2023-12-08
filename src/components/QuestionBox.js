import React, { useState ,useEffect , createContext} from 'react'
import questions from '../questions'
import Result from './Result'

export const Mark=createContext()

export default function QuestionBox() {
  let [quesNum,setquesNum]=useState(1)
  let [count,setcount]=useState(1)
  let [quizResult,setquizResult]=useState(0)
  let blue='#7277fc'
  let [highlight,sethighlight]=useState('blue')
  
  function Questioncount(item){
    setcount(count+1)
    setquesNum(quesNum+1)
    if(item.isCorrect===true){  
      setquizResult(quizResult+1)
    }
  }
  
  function removeHighlight(){
    sethighlight(blue)
    
  }

  function Highlight(){
    let red="#f73939"
    sethighlight(red)
  }

  useEffect(() => {
  }, [quesNum]);


  return (
      <>
      {quesNum!==6?
      <>
      <h2>Question : {quesNum} out of 5</h2>
        <h1 style={{color: highlight}}>{questions[quesNum-1].text}</h1>
        <div>
          {questions[quesNum-1].options.map((item)=>{
            return(<div className='options' key={item.id} onClick={()=>Questioncount(item)}>{item.text}</div>)
          })}
        </div>
        <div className='hlbox'>
          <button onClick={Highlight} className='high-light'>Highlight</button>
          <button onClick={removeHighlight} className='remove-highlight'>Remove Highlight</button>
        </div>
        </>
        :
          <>
          <Mark.Provider value={quizResult}>
            <Result/>
          </Mark.Provider>
          </>
        }
        
        
      </>
  )
}