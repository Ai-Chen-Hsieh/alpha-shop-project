import styles from './ProgressControl.module.scss'

export default function ProgressControl({currentState, handlePrevClick, handleNextClick}) {
 
    return(
      <section className='progressControlContainer'>
        <section className='buttonGroup' data-phase='address'>
            <button 
              className={currentState === 1 ? styles.invisible : styles.btnPrimary}
              onClick={handlePrevClick}
            >
              <span >&#8592; </span>上一步
            </button>
            <button className={styles.btnOutline} onClick={() => {handleNextClick(currentState)}}>
              {currentState === 3 ? '確定下單' : '下一步'}
              {currentState !== 3 && <span>&#8594;</span> }
            </button>
        </section>
      </section>
    )    
}