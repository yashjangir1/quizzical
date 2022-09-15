import React from "react";
import Question from "../Question";
import './index.css'

const QuizQuestions = (props) => {
    const [checkAnswers, setCheckAnswers] = React.useState(false);
    const {quizArr} = props

    const checkingAnswers = () => {
        setCheckAnswers(true);
    }

    return (
        <div className="quiz-questions-container">
            <div className="questions-container">
                {quizArr.map((item) => <Question checkAnswers = {checkAnswers} key = {item.id} question = {item.question} options = {[...item.incorrect_answers, item.correct_answer]} />)}
            </div>
            <button onClick={checkingAnswers} className="check-answer-button">Check answers</button>
        </div>
    )
}

export default QuizQuestions