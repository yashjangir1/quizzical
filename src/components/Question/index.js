import React from "react";
import './index.css'
import { v4 as uuid } from "uuid";

const Question = (props) => {
    const {question, options} = props
    const [optionClicked, setOptionClicked] = React.useState('')

    const onOptionSelect = (e) => {
        setOptionClicked(e.target.textContent);
    }

    return (
        <div className="question-container">
            <p className="question">{decodeURI(question.replaceAll("&quot;", '"').replaceAll("&#039;", "'"))}</p>
            <div className="options-container">
                {options.map((item) => <button onClick = {onOptionSelect} key = {uuid()} className="option" style={{backgroundColor: optionClicked === item ? "#D6DBF5" : "#F5F7FB", border: optionClicked === item ?  "none":"1px solid #293264"}} >{item}</button>)}
            </div>
        </div>
    )
}

export default Question;