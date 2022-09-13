import React from "react";
import './index.css'

const QuizQuestions = () => {
    const quizArr = [
        {"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"What is the chemical formula for ammonia?","correct_answer":"NH3","incorrect_answers":["CO2","NO3","CH4"]},
        {"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"Which character from the Mega Man series made a small cameo on Volt Catfish&#039;s introduction scene in CD versions of Mega Man X3?","correct_answer":"Auto","incorrect_answers":["Eddie","Tango","Rush"]},
        {"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"In &quot;Call Of Duty: Zombies&quot;, completing which map&#039;s easter egg will reward you with the achievement, &quot;Time Travel Will Tell&quot;?","correct_answer":"Shangri-La","incorrect_answers":["Ascension","Moon","Die Rise"]},
        {"category":"Entertainment: Japanese Anime & Manga","type":"multiple","difficulty":"medium","question":"In &quot;To Love-Ru: Darkness&quot;, which of the girls attempt making a harem for Rito Yuuki?","correct_answer":"Momo Deviluke","incorrect_answers":["Yami (Golden Darkness)","Haruna Sairenji","Mea Kurosaki"]},
        {"category":"Mythology","type":"multiple","difficulty":"medium","question":"In African mythology, Anansi is a trickster and storyteller who takes the shape of which animal?","correct_answer":"Spider","incorrect_answers":["Wild dog","Monkey","Crocodile"]}
    ]

    return (
        <div className="quiz-questions-container"></div>
    )
}

export default QuizQuestions