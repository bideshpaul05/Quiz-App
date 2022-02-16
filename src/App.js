import React, { useState } from 'react'
import './App.css';
import Landing from './components/Landing';
import Quiz from './components/Quiz';

function App() {
  
  const [loading,setloading] = React.useState(true)
  const [loadQuizPage,setLoadQuizPage] = React.useState(false)
  function LoadQuiz(){
    setLoadQuizPage(true)
  }
    const [data,setData]=React.useState({
      // results:[{
    //   correct_answer:"",
    //   incorrect_answers:[],
    //   question:""
    // },
    // {
    //   correct_answer:"",
    //   incorrect_answers:[],
    //   question:""
    // },
    // {
    //   correct_answer:"",
    //   incorrect_answers:[],
    //   question:""
    // },
    // {
    //   correct_answer:"",
    //   incorrect_answers:[],
    //   question:""
    // },
    // {
    //   correct_answer:"",
    //   incorrect_answers:[],
    //   question:""
    // }]
  })
    
  React.useEffect( ()=>{
    fetch('https://opentdb.com/api.php?amount=5&category=31&difficulty=easy&type=multiple')
    .then(function(response){
      return response.json()
    })
    .then(function(res){
     setData(res)
     setloading(false)
    })
    .catch(function(err){
      console.log(err)
    })},[])
   
  if(loading) return (<h1>LOADING...</h1>)
       if(loadQuizPage) return (<div className="quiz-part">
       <Quiz data = {data} LoadQuiz = {LoadQuiz} />

       </div>)
  return (
    <div className="App">
      <Landing LoadQuiz = {LoadQuiz}/>
      
   </div>
  );
}

export default App;
