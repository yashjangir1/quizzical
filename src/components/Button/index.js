import React from "react";
import './index.css'

const Button = (props) => {
    const {option, onOptionSelect, optionClicked, checkOption, answer} = props

    const stylingOptions = () => {
        if(checkOption){
            if(option === answer){
                return {
                    backgroundColor: "#94D7A2",
                    border: "none"
                }
            }
            if(optionClicked === option && answer !== option){
                return {
                    backgroundColor: "#F8BCBC",
                    border: "none"
                }
            }
            if(optionClicked !== option){
                return {
                    backgroundColor: "#F5F7FB",
                    border: "1px solid #293264"
                };
            }
        }
        else{
            if(optionClicked === option){
                return {
                    backgroundColor: "#D6DBF5",
                    border: "none"
                };
            }
            else{
                return {
                    backgroundColor: "#F5F7FB",
                    border: "1px solid #293264"
                };
            }
        }
    }

    return (
        <button onClick = {onOptionSelect} className="option" style={stylingOptions()} >{option}</button>
    )
}

export default Button