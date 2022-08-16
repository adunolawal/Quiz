const  Start = (props) => {
    return ( 
        <div>
            <h1>Start the Quiz</h1>
            <p>Good luck!</p>
            <button onClick={props.startQuiz} > Start</button>
        </div>
    );
}
 
export default Start;