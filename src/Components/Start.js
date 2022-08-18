const  Start = (props) => {
    return ( 
        <div>
            <h1>WELCOME </h1>
            <h1>Start the Quiz</h1>
            <p>Good luck!</p>
            <button onClick={props.startQuiz} > Start</button>
        </div>
    );
}
 
export default Start;