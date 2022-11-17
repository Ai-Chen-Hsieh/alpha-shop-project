import styles from './StepProgress.module.scss'

function StepControl({currentState, step}){
  if(currentState < step) {
    return <span className={styles.textUndone}>{step}</span>
  } if(currentState === step) {
    return <span className = {styles.textActive}>{step}</span>
  } else {
    return null
  }
}

function Step ({ currentState, step, label} ) {
  

  return (
    <>
       <span className={styles.progressGroup}>
        <span className={styles.progressIcon}>
          <StepControl 
            currentState={currentState}
            step={step}
          />
            <svg className='iconStyle' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#333333"/>
              <path d="M9.99997 16.1699L5.82997 11.9999L4.40997 13.4099L9.99997 18.9999L20.5 8.49994L19.09 7.08994L9.99997 16.1699Z" fill="white"/>
            </svg>
        </span>
        <span className={currentState >= step ? styles.progressLabelCompleted : styles.progressLabel} >{label}</span>
      </span> 
    </>
  )
}

export default function StepProgress ({currentState}){
    return (
        <>
          <section className={styles.progressContainer}>
            <Step
              currentState={currentState}
              step= {1}
              label='寄送地址'
              />
            <span className={
              (currentState >= 1) ? styles.progressBarCompleted : styles.progressBar}>
              </span>
            <Step 
              currentState={currentState}
              step={2}
              label='運送方式'
              />
            <span className={
             (currentState >= 2) ? styles.progressBarCompleted : styles.progressBar
             }></span> 
            <Step 
              currentState={currentState}
              step={3}
              label='付款資訊'
              />
          </section>
        </>
    )
}

