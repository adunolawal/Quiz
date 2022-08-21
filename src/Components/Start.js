const  Start = (props) => {
    return ( 
        <div className="start">
            <h1 className="welcome">WELCOME TO THEQUIZAPP</h1>
            <h2>Start the Quiz</h2>
            <p>Good luck!</p>
            <button onClick={props.startQuiz} > Start</button>
        </div>
    );
}
 
export default Start;