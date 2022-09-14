import React from "react";
import './index.css'

const Question = (props) => {
    const {question, options} = props

    return (
        <div className="question-container">
            <p className="question">{decodeURI(encodeURI(question))}</p>
            <div className="options-container">
                <button className="option">{options[0]}</button>
                <button className="option">{options[1]}</button>
                <button className="option">{options[2]}</button>
                <button className="option">{options[3]}</button>
            </div>
        </div>
    )
}

export default Question;