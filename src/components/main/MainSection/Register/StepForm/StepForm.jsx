import styles from './StepForm.module.scss'
import StepOne from './StepOne/StepOne'
import StepTwo from './StepTwo/StepTwo'
import StepThree from './StepThree/StepThree'

export function InputGroup ({labelName, inputInfo, type = "text", placeholder, value, name, onHandleChange}) {
  return(
    <div className={`${styles.inputGroup} ${inputInfo}`}>
      <div className='inputLabel'>{labelName}</div>
      <input type={type} placeholder={placeholder} value={value}  name={name} onChange={(e) => {
        onHandleChange?.(e, 'address')
      }}/>
    </div>
  )
}

export default function StepForm({currentState}){
    return(
        <>
          <StepOne currentState={currentState} />
          <StepTwo currentState={currentState} />
          <StepThree currentState={currentState} />
        </>
    )
}