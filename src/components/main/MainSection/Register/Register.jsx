import StepForm from './StepForm/StepForm'
import StepProgress from './StepProgress/StepProgress'
import ProgressControl from './ProgressControl/progressControl'
import { useState, useContext} from 'react';
import { CustomerInfoContext } from 'Context/CustomerContext'


export default function Register() {
const [currentState, setCurrentState] = useState(1)
const OrderMessage = useContext(CustomerInfoContext).info;

function handleNextClick(currentState){
    //限制state 在三個step以內，避免render錯誤
    if(currentState < 3){
        setCurrentState(currentState + 1)
    }
    //點擊確定下單顯示orderMessage
    if(currentState === 3){
        console.log(OrderMessage)
    }
}

function handlePrevClick(){
    setCurrentState(currentState - 1)
}
    return(
    <section className='RegisterSection'>
        <StepProgress         
        currentState = {currentState}
        />
        <StepForm 
        />
        <ProgressControl
            currentState = {currentState}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
        />
    </section>
    )
}
