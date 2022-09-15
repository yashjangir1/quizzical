import React from "react";
import Question from "../Question";
import './index.css'

const QuizQuestions = (props) => {
    const [checkAnswers, setCheckAnswers] = React.useState(false);
    const {quizArr} = props
    const [score, setScore] = React.useState(0);
    const [quizArray, setQuizArray] = React.useState([]);

    const updateScore = () => {
        setScore(prevScore => prevScore + 1);
    }

    const setScoreZero = () => {
        setScore(0);
    }

    const checkingAnswers = () => {
        setCheckAnswers(true);
    }

    const playAgain = () => {
        const settingQuestion = async () => {
            try{
                const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
                const data = await response.json()
                setQuizArray(data.results.map((item, index) => ({...item, id: index, options: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5)})))
                setCheckAnswers(false)
                setScoreZero();
            }
            catch(error){
                console.log(error);
            }
        }
        
        settingQuestion();
    }

    React.useEffect(() => {
        setQuizArray(quizArr.map((item) => ({...item,options: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5)})))
    }, []);

    return (
        <div className="quiz-questions-container">
            <div className="questions-container">
                {quizArray.map((item) => <Question updateScore = {updateScore} checkAnswers = {checkAnswers} key = {item.id} question = {item.question} answer = {item.correct_answer} options = {item.options} />)}
            </div>
            {checkAnswers ? 
            (
                <div className="score-container">
                    <p className="question score">{`You scored ${score}/5 correct answers`}</p>
                    <button onClick = {playAgain} className="check-answer-button play-again-button">Play again</button>
                </div>
            )
            : <button onClick={checkingAnswers} className="check-answer-button">Check answers</button>}
            
        </div>
    )
}

export default QuizQuestions