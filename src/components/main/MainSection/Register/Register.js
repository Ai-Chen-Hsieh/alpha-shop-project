
import StepForm from './StepForm/StepForm.js'
import StepProgress from './StepProgress/StepProgress.js'
import ProgressControl from './ProgressControl/progressControl.js'
import {useState} from 'react';


export default function Register() {
const [currentState, setCurrentState] = useState(1)

function handleNextClick(){
    //限制state 在三個step以內，避免render錯誤
    if(currentState < 3){
        setCurrentState(currentState + 1)
    }
}
function handlePrevClick(){
        //限制state 在三個step以內，避免render錯誤
    if(currentState <= 3){
        setCurrentState(currentState - 1)
    }
}
    return(
    <section className='RegisterSection'>
    <StepProgress         
        currentState = {currentState}
        />
    <StepForm />
    <ProgressControl
        currentState = {currentState}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
    />
    </section>
    )
}
