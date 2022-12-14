import { useState } from "react";
import Questions from "./Question/Questions";
import Start from "./Start";
import data from "../data/quiz.json"
import EndQuiz from "./Question/EndQuiz";


const Quiz = () => {

    const [nextStep, setNextStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([])

    const startQuiz = () => {
        setNextStep(2)
    }

    //handles reset of quiz
    const reset =() =>{
        setActiveQuestion(0)
        setAnswers([])
        setNextStep(2)
    }

    return ( 
        <div>
           {nextStep === 1 &&  <Start startQuiz={startQuiz} ></Start> }
            {nextStep === 2 && <Questions data={data.data[activeQuestion]} 
                answerUpdate = {setAnswers}
                numberOfQuestions = {data.data.length}
                activeQuestion = {activeQuestion}
                setActiveQuestion = {setActiveQuestion}
                setNextStep = {setNextStep}
            ></Questions> }
            {nextStep === 3 && <EndQuiz
                results = {answers}
                data={data.data}
                reset={reset}
            ></EndQuiz> }
        </div>
    );
}
 
export default Quiz;