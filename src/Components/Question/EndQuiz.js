import { useEffect, useState } from "react";

const EndQuiz = (props) => {

    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [message, setMessage] = useState("")

    // calculating results
    useEffect(() => {
        let correct = 0
        props.results.forEach((result,index) => {
            if(result.a === props.data[index].answer){
                correct++;
            }
        });
        setCorrectAnswers(correct)
        if(correct === 1 || correct === 0 ){
            setMessage("Oga try again you no do well!")
        }
        else if(correct === 3 || correct === 2 ){
            setMessage("You did your best!")
        }
        else if(correct === props.data.length ){
            setMessage("Oshey Baddest!")
        }
    },[props.results, props.data])

    return ( 
        <div className="endquiz">
            <h1>Result</h1>
            <h2>You scored</h2>
            <h4> {correctAnswers} out of {props.data.length}</h4>
            <h3> {Math.floor((correctAnswers / props.data.length) * 100)} % </h3>
            <h1>{message}</h1>
            <button onClick={props.reset} >Try Again</button>
        </div>
    );
}
 
export default EndQuiz;