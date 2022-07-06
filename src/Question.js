import React from 'react'

function Question(props){
   let {options} = props

   console.log(options)

   return(
     <div className="question-container">
        <p className="question">{props.question}</p>
        <div className="options">
            {
               options.map((option) => {
                  return(
                     <button 
                         onClick = {props.handleSelect} 
                         key = {option.optionsId} 
                         className = "option"
                         style = {props.check ? option.option === props.correct_answer ? {backgroundColor : "#94D7A2", border : "none"} : option.selected ? {backgroundColor : "#F8BCBC", border:"none"} : {} : {}}
                         >{option.option}
                     </button>
                  )
               })
            }
        </div>
     </div>
   )
}

export default Question