import React, { useState ,useEffect , createContext} from 'react'
import questions from '../questions'
import QuizResult from './QuizResult'

export const ScoreContext = createContext();


export default function QuizBox() {
  let [currentQuestionNum, setCurrentQuestionNum] = useState(1);
  let [attemptCount, setAttemptCount] = useState(1);
  let [userScore, setUserScore] = useState(0);
  let defaultColor = '#7277fc';
  let [highlightColor, setHighlightColor] = useState(defaultColor);
  
  function handleAttempt(item) {
    setAttemptCount(attemptCount + 1);
    setCurrentQuestionNum(currentQuestionNum + 1);
    if (item.isCorrect === true) {
      setUserScore(userScore + 1);
    }
  }
  
  function resetHighlight() {
    setHighlightColor(defaultColor);
  }

  function applyHighlight() {
    let highlightColor = '#f73939';
    setHighlightColor(highlightColor);
  }

  useEffect(() => {
  }, [currentQuestionNum]);


  return (
    <>
      {currentQuestionNum !== 6 ? (
        <>
          <h2>Question: {currentQuestionNum} out of 5</h2>
          <h1 style={{ color: highlightColor }}>{questions[currentQuestionNum - 1].text}</h1>
          <div>
            {questions[currentQuestionNum - 1].options.map((item) => {
              return (
                <div className='quiz-option' key={item.id} onClick={() => handleAttempt(item)}>
                  {item.text}
                </div>
              );
            })}
          </div>
          <div className='highlight-box'>
            <button onClick={applyHighlight} className='apply-highlight'>
              Apply Highlight
            </button>
            <button onClick={resetHighlight} className='reset-highlight'>
              Reset Highlight
            </button>
          </div>
        </>
      ) : (
        <>
          <ScoreContext.Provider value={userScore}>
            <QuizResult />
          </ScoreContext.Provider>
        </>
      )}
    </>
  );
}



