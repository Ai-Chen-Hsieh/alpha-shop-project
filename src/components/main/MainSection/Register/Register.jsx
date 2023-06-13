import StepForm from './StepForm/StepForm'
import StepProgress from './StepProgress/StepProgress'
import ProgressControl from './ProgressControl/progressControl'
import Order from '../Order/Order'
import { useState, useContext} from 'react';
import Swal from 'sweetalert2'
import { createPortal } from 'react-dom';
import { CustomerContext } from 'Context/CustomerOrderContext'

export default function Register() {
const [currentState, setCurrentState] = useState(1);
const [showSubmitOrder, setShowSubmitOrder] = useState(false);
const { address, shipping, payInfo } = useContext(CustomerContext);

//處理表單下一步
function handleNextClick(currentState){

    //檢查欄位是否有空白
    // if(currentState === 1){
    //     for(let key in address){
    //         if(address[key].length === 0){
    //             Swal.fire({
    //                 position: 'top',
    //                 icon: 'error',
    //                 title: '欄位不能有空白',
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               })
    //             return 
    //         }
    //     }
    // }
    // if(currentState === 2){
    //     for(let key in shipping){
    //         if(shipping[key].length === 0){
    //             Swal.fire({
    //                 position: 'top',
    //                 icon: 'error',
    //                 title: '欄位不能有空白',
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               })
    //             return 
    //         }
    //     }
    // }
    // if(currentState === 3){
    //     for(let key in payInfo){
    //         if(payInfo[key].length === 0){
    //             Swal.fire({
    //                 position: 'top',
    //                 icon: 'error',
    //                 title: '欄位不能有空白',
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               })
    //             return 
    //         }
    //     }
    // }
    
    //限制state 在三個step以內，避免畫面錯誤
    if(currentState < 3){
        setCurrentState(currentState + 1)
    }

    //點擊確定下單顯示orderMessage
    if(currentState === 3){
        setShowSubmitOrder(true)
    }
}

//處理表單上一步
function handlePrevClick(){
    setCurrentState(currentState - 1)
}
    return(
        <>
            <section className='RegisterSection'>
                <StepProgress         
                    currentState = {currentState}
                />
                <StepForm 
                    currentState = {currentState}
                />
                <ProgressControl
                    currentState = {currentState}
                    handleNextClick={handleNextClick}
                    handlePrevClick={handlePrevClick}
                />
            </section>
            {showSubmitOrder && createPortal(<Order 
                onClose={() => setShowSubmitOrder(false)}
                />, document.body)}
        </>
    )
}
