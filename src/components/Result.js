import React , {useContext} from 'react'
import { Mark } from './QuestionBox.js'

export default function Result() {

  const score=useContext(Mark)

  function restart(){
    <>
      {window.location.reload(false)}
    </>
  }

  return (
    <div>
      <h1>Final Result</h1>
      <h2>{score} out of 5</h2>
      <h2>({(score/5)*100}%)</h2>
      <button onClick={restart} className='restartBTN'>Restart</button>
    </div>
  )
}