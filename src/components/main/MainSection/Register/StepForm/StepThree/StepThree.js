
import styles from "./StepThree.module.scss"


export default function StepThree(){
    return (
        <form data-phase="credit-card">
            <h3 className='formTitle'>付款資訊</h3>
            <section className='formBody'>
            <div className='col'>
                <div className={`${styles.inputGroup} ${styles.creditInfo}`}>
                    <div className='inputLabel'>持卡人姓名</div>
                    <input className={styles.creditInfo} type="text" placeholder='John Doe' />
                </div>
            </div>
            <div className='col'>
                <div className={`${styles.inputGroup} ${styles.creditInfo}`}>
                    <div className='inputLabel'>卡號</div>
                    <input className={styles.creditInfo} type="text" placeholder='1111 2222 3333 4444' />
                </div>
            </div>
            <div className='col'>
                <div className={`${styles.inputGroup} ${styles.creditCardDate}`}>
                    <div className='inputLabel'>有效期限</div>
                    <input className={styles.creditInfo} type="text" placeholder='MM/YY' />
                </div>
                <div className={`${styles.inputGroup} ${styles.creditCardDate}`}>
                    <div className='inputLabel'>CVC / CCV</div>
                    <input className={styles.creditInfo} type="text" placeholder='123' />
                </div>
            </div>
            </section>
        </form>
    )
}