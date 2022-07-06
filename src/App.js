import React from 'react'
import './index.css'
import Question from './Question'
import {nanoid} from 'nanoid'

function App() {
  const [quiz, setQuiz] = React.useState([])
  const [check, setCheck] = React.useState(false)
  const [checkingAnswer, setCheckingAnswer] = React.useState(false)
  const [score, setScore] = React.useState(0)


  function startQuiz(){
    setCheck(true)
  }

  
  function handleSelect(options,event){
    options.forEach((option) => {
      if(event.target.textContent === option.option){
        option.selected = true
        event.target.style.backgroundColor = "#D6DBF5"
        event.target.style.border = "none"
      }
      else{
        option.selected = false
      }
    })
    for(let i = 0; i < 4; i++){
      if(event.target.parentElement.children[i].textContent !== event.target.textContent){
          event.target.parentElement.children[i].style.backgroundColor = "transparent"
          event.target.parentElement.children[i].style.border = "2px solid #4D5B9E"
      }
    }
    console.log(options)
 }

 function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

 function handleCheck(){
  setCheckingAnswer(true)
  quiz.forEach((question) => {
    question.options.forEach((option) => {
      if(option.selected){
         if(option.option === question.results.correct_answer){
           setScore((prevScore) => prevScore + 1)
         }
      }
    })
  })
 }

 function handlePlayAgain(){
      setQuiz([])
      setCheckingAnswer(false)
 }

  React.useEffect(() => {
    if(check){
      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(response => response.json())
        .then(data => {
          let quizVal = []
          for(let i = 0; i<5; i++){
            let optionsArr = [{option: data.results[i].correct_answer, optionId : nanoid(), selected : false}]
            for(let j = 0; j<3; j++){
              optionsArr.push({option: data.results[i].incorrect_answers[j], optionId: nanoid(), selected : false})
            }
            quizVal.push({results: data.results[i], options: optionsArr, id : nanoid()})
          }
          setQuiz(quizVal)
        })
      
      setCheck(false)
    }
  }, [check])

  let questionsArray = quiz.map((item) => {
    let optionsArr = item.options
    if(!checkingAnswer){
      optionsArr = shuffle(item.options)
    }
    return (
      <Question
        check = {checkingAnswer}
        handleSelect = {(event) => handleSelect(item.options,event)} 
        key = {item.id} 
        question = {item.results.question.replaceAll("&quot;" , '"').replaceAll("&#039;", "'")}
        options = {optionsArr}
        correct_answer = {item.results.correct_answer}
      />
    )
  })

  return (
    <div className = "main-container">
        {quiz.length === 0 ? 
        <div className = "quiz-start-container">
           <h1 className="quiz-start-heading">Quizzical</h1>
           <p className="quiz-start-detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, non.</p>
           <button onClick = {startQuiz} className="start-quiz-button">Start Quiz</button>
        </div>
        
        :

        <div className="quiz-main-page">
          {questionsArray}
          <div class = "score_and_button">
          {checkingAnswer ? <p class = "score-text">You scored {score}/5 correct answers</p> : ""}
          {!checkingAnswer ? <button onClick = {handleCheck} className="check-answers-button">Check Answers</button>:<button onClick = {handlePlayAgain} className="check-answers-button">Play Again</button>}
          </div>
        </div>
        }
    </div>
  );
}

export default App;
