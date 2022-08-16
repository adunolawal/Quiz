import { useEffect, useState } from "react";

const EndQuiz = (props) => {

    const [correctAnswers, setCorrectAnswers] = useState(0)

    useEffect(() => {
        let correct = 0
        props.results.forEach((result,index) => {
            if(result.a === props.data[index].answer){
                correct++;
            }
        });
        setCorrectAnswers(correct)
    },[])

    return ( 
        <div>
            <h1>Result</h1>
            <h2>You scored</h2>
            <p> {correctAnswers} out of {props.data.length}</p>
            <p><strong> {Math.floor((correctAnswers / props.data.length) * 100)} % </strong></p>
            <button onClick={props.reset} >Try Again</button>
        </div>
    );
}
 
export default EndQuiz;