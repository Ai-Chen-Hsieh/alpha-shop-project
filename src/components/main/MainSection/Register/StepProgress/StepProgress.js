import styles from './StepProgress.module.scss'

function CompletedIcon({step, stepStyle, iconStyle}){
  return(
    <>
    <span className={stepStyle}>{step}</span>
    <svg className={iconStyle} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#333333"/>
      <path d="M9.99997 16.1699L5.82997 11.9999L4.40997 13.4099L9.99997 18.9999L20.5 8.49994L19.09 7.08994L9.99997 16.1699Z" fill="white"/>
    </svg>
    </>
  )
}

function Step ({labelStyle, progressLabel, children} ) {
  return (
    <>
      <span className={styles.progressGroup}>
        <span className={styles.progressIcon}>
          {children}
        </span>
        <span className={`${labelStyle} ${styles.progressLabel}`}>{progressLabel}</span>
      </span>
    </>
  )
}

export default function StepProgress (){
    return (
        <>
          <section className={styles.progressContainer}>
            <Step labelStyle={styles.progressLabelCompleted} progressLabel='寄送地址'>
              <CompletedIcon
                step='1'
                stepStyle={styles.primaryTextCompleted}
                iconStyle='displayNone'
              />
            </Step>
            <span className={styles.progressBarCompleted}></span>
            <Step progressLabel='運送方式'>
              <CompletedIcon
                step='2'
                stepStyle={styles.primaryText}
                iconStyle='displayNone'
              />
            </Step>
            <span className={styles.progressBar}></span> 
            <Step progressLabel='付款資訊'> 
              <CompletedIcon
                step='3'
                stepStyle = {styles.primaryText}
                iconStyle='displayNone'
              />
            </Step> 
          </section>
        </>
    )
}


