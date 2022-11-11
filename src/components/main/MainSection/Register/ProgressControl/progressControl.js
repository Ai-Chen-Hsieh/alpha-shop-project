import styles from './ProgressControl.module.scss'

export default function ProgressControl() {
    return(
        <section className={styles.progressControlContainer}>
          <section className={styles.buttonGroup} data-phase="address">
          <button className={`${styles.btnPrimary}`}>
              <span className={styles.preIcon}>&#8592;  </span>上一步
            </button>
            <button className={`${styles.btnOutline}`}>
              下一步  <span className={styles.nextIcon}>&#8594;</span> 
            </button>
          </section>
        </section>
    )

    
}