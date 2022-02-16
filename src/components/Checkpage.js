import React from 'react'
import './Quiz.css'
export default function Checkpage(props) {
  let count =0;
  let quizzi = props.stuff.map((i,index)=>{
    let answers  = [...i.incorrect_answers,i.correct_answer]
    let answ = answers.map((i,ind)=>{
     
        
        if(i===props.stuff[index].correct_answer&&props.selectedAnswer[index]===ind){
          count = count+1
          return(
            <div className="ans correct">
              {i}
            </div>
          )
        }
        else if(props.selectedAnswer[index]===ind){
          console.log('matched')
         
          return(
            
           <div className="ans wrong">
              {i}
            </div>
            
          )
          
        }
        else{
          if(i===props.stuff[index].correct_answer)
          {
            return(
              <div className="ans actual">
              {i}
            </div>
            )
          }
          return(
            <div className="ans">
              {i}
            </div>
          )
        }
      
      
      
    })
 console.log(count)
  return (
  <div className='question-field'>
    <div className="question">
      {i.question}
    </div><div className="answers">
      {answ}
      </div><hr className='line'></hr></div>
      
)})
function refreshPage() {
  window.location.reload(false);
}
  
  return (
    <div className='quiz-sec'>
          {quizzi}
     
          <div className="answerBtn">
            <div className="statement">
              
              You scored {count}/5 Correct Answer{count>1 ? 's': ''} !!
            </div>
            

<button className='answerbtn' onClick={refreshPage}>Restart</button>
   </div>
    </div>
  )
}
