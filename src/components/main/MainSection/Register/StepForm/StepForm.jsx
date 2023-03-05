//保留StepTwo & StepThree import。未來開發功能: 依照當前結帳步驟渲染 StepTwo & StepThree
import styles from './StepForm.module.scss'
// import StepOne from './StepOne'
// import StepTwo from './StepTwo'
import StepThree from '../StepForm/StepThree/StepThree'

export function InputGroup ({labelName, inputInfo, type = "text", placeholder}) {
  return(
    <div className={`${styles.inputGroup} ${inputInfo}`}>
      <div className='inputLabel'>{labelName}</div>
      <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default function StepForm(){
    return(
        <>
          <StepThree/>
        </>
    )
}