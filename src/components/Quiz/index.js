import React from 'react'
import './index.css'
import QuizQuestions from '../QuizQuestions'

const Quiz = () => {
    const [questionsArr, setQuestionsArr] = React.useState([])

    const generateQuestions = () => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
           .then((response) => response.json())
           .then((data) => setQuestionsArr(data.results.map((item, index) => ({...item, id: index}))))
    }

    return (
        questionsArr.length === 0 ? 
            (<div className='main-container'>
                <h1 className='quiz-heading'>Quizzical</h1>
                <p className='quiz-desc'>Test you general knowledge with Quizzical</p>
                <button className='start-quiz-button' onClick = {generateQuestions} >Start quiz</button>
            </div>)
            :
            (<QuizQuestions quizArr = {questionsArr} />)
    )
}

export default Quiz