import React, { useContext } from 'react';
import { ScoreContext } from './QuestionBox';

export default function QuizResult() {
  const userScore = useContext(ScoreContext);

  function handleRestart() {
    window.location.reload(false);
  }

  return (
    <div>
      <h1>Final Score</h1>
      <h2>{userScore} out of 5</h2>
      <h2>({(userScore / 5) * 100}%)</h2>
      <button onClick={handleRestart} className='restart-button'>
        Restart Quiz
      </button>
    </div>
  );
}
