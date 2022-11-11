import styles from './StepTwo.module.scss'
export function ShippingContain ({shippingMethod, price, period}) {
    return(
        <label className={styles.radioGroup} data-price="0">
            <input className={styles.shippingStandard} type="radio" name="shipping"  checked/>
            <div className={styles.radioInfo}>
                <div className={styles.shippingItem}>
                    <div className="text">{shippingMethod}</div>
                    <div className="price">{price}</div>
                </div>
                <div className="period ">{period}</div>
            </div>
        </label>
    )
}

export default function StepTwo () {
    return(
    <form  data-phase="shipping">
        <h3 className='formTitle'>運送方式</h3>
        <section className='formBody'>
            <ShippingContain shippingMethod='標準運送' price='免費' period='約3~7個工作天'/>
            <ShippingContain shippingMethod='DHL貨運' price='$500' period='48小時內送達'/>
        </section>
    </form>
    )
}