import { useContext } from 'react'
import { CustomerInfoContext } from 'Context/CustomerContext'
import styles from "./StepThree.module.scss"

export default function StepThree(){
    const {info, setInfo}  = useContext(CustomerInfoContext)

    function handleChange(e){
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form data-phase="credit-card">
            <h3 className='formTitle'>付款資訊</h3>
            <section className='formBody'>
            <div className='col'>
                <div className={`${styles.inputGroup} ${styles.creditInfo}`}>
                    <div className='inputLabel'>持卡人姓名</div>
                    <input className={styles.creditInfo} type="text" placeholder='John Doe' name="name" onChange={handleChange}/>
                </div>
            </div>
            <div className='col'>
                <div className={`${styles.inputGroup} ${styles.creditInfo}`}>
                    <div className='inputLabel'>卡號</div>
                    <input className={styles.creditInfo} type="text" placeholder='1111 2222 3333 4444' number="number" onChange={handleChange}/>
                </div>
            </div>
            <div className='col'>
                <div className={`${styles.inputGroup} ${styles.creditCardDate}`}>
                    <div className='inputLabel'>有效期限</div>
                    <input className={styles.creditInfo} type="text" placeholder='MM/YY' expirydate="expirydate" onChange={handleChange}/>
                </div>
                <div className={`${styles.inputGroup} ${styles.creditCardDate}`}>
                    <div className='inputLabel'>CVC / CCV</div>
                    <input className={styles.creditInfo} type="text" placeholder='123'  cvc="cvc" onChange={handleChange}/>
                </div>
            </div>
            </section>
        </form>
    )
}