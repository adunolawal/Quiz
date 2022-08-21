import React, { useEffect, useRef, useState } from "react";
import Frame from '../Images/Frame.svg';

const Questions = (props) => {

    const [selected, setSelected] = useState("");
    const [error, setError] = useState("")
    const radiosWrapper = useRef()
    const [popUp, setPopUp] = useState(false)

    const changeHandler = (e) => {
        setSelected(e.target.value)
        if(error){ 
            setError("")
        }
    }
    useEffect( () => {
        const checkedInput = radiosWrapper.current.querySelector('input:checked');
        if(checkedInput) {
            checkedInput.checked = false;
        }
    },[props.data])

    const togglepopUp = () =>{
        setPopUp(!popUp)
    }

    const nextQuestionHandler = (e) => {
       if(selected === "") {
        return setError("Please select one option!")
       }
       props.answerUpdate(prevState => [...prevState, {q: props.data.question, a: selected}])
       setSelected("");
       if(props.activeQuestion < props.numberOfQuestions - 1){
        props.setActiveQuestion(props.activeQuestion + 1)
       }
       else{
        props.setNextStep(3)
       }
    }
    const end = () => {
        props.setNextStep(3)
    }

    return ( 
        <div className="questions">
            <div onClick={togglepopUp} className="end">Quit</div>
            {popUp && 
            <div>
                <div className="bgnd" onClick={togglepopUp}> </div>
                <div className="modal">
                    Are you sure you want to end quiz 
                    <div className="btns"> 
                        <div className="btn-b1"  onClick={togglepopUp}> Continue </div>
                        <div className="btn-b1" onClick={end} > End Quiz </div>   
                    </div>
                </div>
            </div>
            }
           <div className="questions1">
                <img className="framey" src={Frame} alt='loading..'></img>
                <div className="questions2">
                    <h2>{props.data.question}</h2>
                    <div ref={radiosWrapper}>
                        {
                        props.data.options.map((choice, i) => (
                            <label key={i} > 
                                <input type="radio" name="answer" value={choice} onChange ={changeHandler} />
                                {choice}
                            </label>
                            )
                        )}
                    </div>
                    {error &&  <div>
                            {error}
                        </div> }
                    <button onClick={nextQuestionHandler} > Next</button>
                </div>
           </div>
        </div>
     );
}
 
export default Questions;


// { Math.random()*4 + 1 }