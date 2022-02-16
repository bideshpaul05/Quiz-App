import React from 'react'
import './Landing.css'
export default function Landing(props) {
  return (
    <div className='landing-sec'>
        <div className="blob1">

        </div>
        <div className="header">
            <h1>Quizzical </h1>

        </div>
        <div className="start">
            <button className="start-btn" onClick = {props.LoadQuiz}>
                Start Quiz
            </button>
        </div>
        <div className="blob2"></div>
    </div>
  )
}
