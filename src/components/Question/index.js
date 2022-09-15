import React from "react";
import './index.css'
import Button from "../Button";
import { v4 as uuid } from "uuid";

const Question = (props) => {
    const {question, options, checkAnswers, updateScore, answer} = props
    const [optionClicked, setOptionClicked] = React.useState('')
   
    React.useEffect(() => {
        if(optionClicked === answer && checkAnswers){
            updateScore();
        }
    }, [checkAnswers]);

    const onOptionSelect = (e) => {
        setOptionClicked(e.target.textContent);
    }

    return (
        <div className="question-container">
            <p className="question">{decodeURI(question.replaceAll("&quot;", '"').replaceAll("&#039;", "'"))}</p>
            <div className="options-container">
                {options.map((item) => <Button answer = {answer} checkOption = {checkAnswers} key = {uuid()} option = {item} onOptionSelect = {onOptionSelect} optionClicked = {optionClicked} />)}
            </div>
        </div>
    )
}

export default Question;