import React from 'react'

const QuizResult = (props) => {
  return (
    <>
      <div>
        Your score : {props.score} <br />
        Total Score : {props.totalScore}
        
    </div>
    <button id='next-button' onClick={props.tryagain}>Try Again</button>
    </>
  )
}

export default QuizResult