import { useContext } from 'react'
import { CustomerContext } from 'Context/CustomerOrderContext'
import styles from "./StepThree.module.scss"

export default function StepThree({currentState}){
    const { payInfo, handleOrder } = useContext(CustomerContext) 

    return (
        (currentState === 3) && (
            <form data-phase="credit-card">
                <h3 className='formTitle'>付款資訊</h3>
                <section className='formBody'>
                <div className='col'>
                    <div className={`${styles.inputGroup} ${styles.creditInfo}`}>
                        <div className='inputLabel'>持卡人姓名</div>
                        <input className={styles.creditInfo} type="text" placeholder='請輸入持卡人姓名' value={payInfo['name']} name="name" onChange={(e) => handleOrder?.(e, 'payInfo')}/>
                    </div>
                </div>
                <div className='col'>
                    <div className={`${styles.inputGroup} ${styles.creditInfo}`}>
                        <div className='inputLabel'>卡號</div>
                        <input className={styles.creditInfo} type="text" placeholder='請輸入卡片號碼' value={payInfo['number']} name="number" onChange={(e) => handleOrder?.(e, 'payInfo')}/>
                    </div>
                </div>
                <div className='col'>
                    <div className={`${styles.inputGroup} ${styles.creditCardDate}`}>
                        <div className='inputLabel'>有效期限</div>
                        <input className={styles.creditInfo} type="text" placeholder='MM/YY' value={payInfo['expirydate']} name="expirydate" onChange={(e) => handleOrder?.(e, 'payInfo')}/>
                    </div>
                    <div className={`${styles.inputGroup} ${styles.creditCardDate}`}>
                        <div className='inputLabel'>CVC / CCV</div>
                        <input className={styles.creditInfo} type="text" placeholder='xxx' value={payInfo['cvc']} name="cvc" onChange={(e) => handleOrder?.(e, 'payInfo')}/>
                    </div>
                </div>
                </section>
            </form>
        ))
}