// Displayqz.js
import React, { useState } from 'react';
import quizData from './Quizq';
import QuizResult from './QuizResult';
import '../App.css'

const Displayqz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score,setScore] = useState(0);
    const [clickedoption,setClickedoption] =useState(0);
    const [showResult,setShowResult] = useState(false);

    const changeQuestion = () => {
        updateScore();
        if(currentQuestion<quizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedoption(0);
        }else{
            setShowResult(true);
        }

    };
    const updateScore =()=>{
      if(clickedoption===quizData[currentQuestion].answer){
        setScore(score+1)
      }
    }
    const Resetall = () =>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedoption(0);
        setScore(0);
    }

    return (
        <>
            <div className="container">
            {showResult ? (
                 <QuizResult score={score} totalScore={quizData.length} tryagain={Resetall}/>
                 ):(<>
                <div className="question">
                 
                 
                    <span>{currentQuestion + 1}.</span>
                    <span>{quizData[currentQuestion].question}</span>
                </div>
                <div className="option">
                    {quizData[currentQuestion].options.map((opt, index) => (
                        <button
                        className={`option-btn ${clickedoption==index+1?"checked":null}`}
                        onClick={()=>setClickedoption(index+1)}
                        key={index}>{opt}</button>
                    ))}
                </div>
                <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
                
                </>
            )}
            </div>
        </>
    );
};

export default Displayqz;
