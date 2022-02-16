import React from 'react'
import Checkpage from './Checkpage'
import './Quiz.css'
export default function Quiz(props) {


const [selectedAnswer,setSelectedAnswer] = React.useState([])
const [checkAnswer,setCheckAnswer] = React.useState(false)
const [getOrderAnswers,setgetOrderAnswers] = React.useState({})
// const [test,settest] = React.useState(0)

function handleClick(e){
 for(let i=0;i<4;i++)
{
  if(e.target.parentElement.children[i].classList.contains('clicked'))
  {
    e.target.parentElement.children[i].classList.remove('clicked')
  }
}
e.target.classList.add('clicked')
}

function finishQuiz(e){
  e.preventDefault()
  let answ = document.querySelectorAll('.answers')
   for(let i=0;i<5;i++)
   {
       for(let j=0;j<4;j++){
      
       if(answ[i].children[j].classList.contains('clicked'))
           {    if(selectedAnswer.length<5)
                  {
                    setSelectedAnswer(prev=>([
                      ...prev,
                      j
                    ]))
                  }
             }
         }
     
        
         }
        
        // Array.from(answ).map(i=>{
        //   Array.from(i.children).map(j=>{
        //     if(j.classList.contains('clicked'))
        //     {
        //       selectedAnswer.push(j.textContent)
        //     }
        //   })
          
        // })
        // if(sele/)
        setCheckAnswer(true)
        
        console.log(selectedAnswer)
      }
      function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }    
      // function getData(answers,index){
      // React.useEffect(
      //   setgetOrderAnswers(prev=>(
      //     {
      //       ...prev,
      //       answers
      //     }
      //   )),index)
      // }
      function render()
      {
const quizzical =  props.data.results.map((i,index)=>{
  let answers  = [...i.incorrect_answers,i.correct_answer]
  
  // shuffle(answers)
  // getData(answers,index)

  // setdata(answwer)
  
  return (
  <div className='question-field'>
    <div className="question">
      {i.question}
    </div><div className="answers">
      {
        answers.map((i)=>{
          return(
            <div className="ans" onClick={(e)=>handleClick(e)}>
              {i}
            </div>
          )
        })
      }
      </div><hr className='line'></hr></div>

)})
return quizzical
}
// console.log("quizzical",quizzical)
if(checkAnswer === true && selectedAnswer.length===5)
{
  return (
    <Checkpage selectedAnswer={selectedAnswer} stuff = {props.data.results} />
  )
}
else if(checkAnswer=== true && selectedAnswer.length<=5){
    alert('All the qustions must be answered !')
    return (
    
      <div className='quiz-sec'>
  
       
                        {render()}
              <div className="answerBtn">
  
           <button className='answerbtn' type='submit' onClick = {(e)=> finishQuiz(e)}>Check Answer</button>
              </div>
              
              
  
       </div>
    )
}
else{
  return (
    
    <div className='quiz-sec'>

     
                      {render()}
            <div className="answerBtn">

         <button className='answerbtn' type='submit' onClick = {(e)=> finishQuiz(e)}>Check Answer</button>
            </div>
            
            

     </div>
  )
}
}


