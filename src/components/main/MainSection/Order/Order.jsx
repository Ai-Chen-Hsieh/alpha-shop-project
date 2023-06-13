import { useContext } from 'react';
import { ReactComponent as CheckIcon } from 'icons/successIcon.svg'
import styles from './Order.module.scss';
import { CustomerContext } from 'Context/CustomerOrderContext';

export default function Order ({onClose}) {
    const { address, shipping, payInfo, products, totalPriceFormat, handleSubmitOrder } = useContext(CustomerContext);
    console.log('here')
    console.log(address, 'order')
    return (
        <div className="orderContainer" onClick={onClose}>
            <div className="order" onClick={(e) => e.stopPropagation()}>
                <div className="title">
                    <CheckIcon className='checkIcon'/>
                    <h2>完成訂購</h2>
                </div>
                <div className="orderContent">
                    <div className="orderSection">
                        <div className="orderTitle">訂購商品</div>
                        <div className="orderProducts">
                        {products.map(product => 
                            <section className='product' key={product.id}>
                                <img className='productImg' src={product.img} alt=''></img>
                                <div className='productInfo'>
                                    <div className='productName'>{product.name}</div>
                                    <div className='productPrice'> ${product.price}</div>
                                    <div className='productQuantity'>x{product.quantity}</div>
                                </div>
                            </section>
                        )}
                        </div>
                    </div>
                    <div className="orderSection">
                        <div className="orderTitle">寄送地址</div>
                            <div className="addressInfoSection">
                                <div className="addressInfo">{address['縣市']} {address['地址']}</div>
                                <div className="addressInfo">{address['姓名']} {address['稱謂']} {address['電話']}</div>
                                <div className="addressInfo">{address['email']}</div>
                            </div>
                            <div className="shippingInfoSection">
                                <div className="shippingInfo">
                                    寄送方式: 
                                </div>
                                <div className="shippingInfo">
                                    {shipping.method}
                                </div>
                                <div className="shippingInfo">
                                    ${shipping.price}
                                </div>
                                
                            </div>
                    </div>
                    <div className="orderSection">
                        <div className="orderTitle">付款方式</div>
                        <div className="payInfoSection">
                            <div className="creditInfo">
                                {payInfo.name}
                            </div>
                            <div className="creditInfo">
                                {payInfo.number}
                            </div>
                            <div className="creditInfo">
                                {payInfo.expirydate}
                            </div>
                            <div className="creditInfo">
                                {payInfo.cvc}
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="totalPriceSection">
                    <div className={styles.priceInfo}>
                        訂單總金額 
                    </div>
                    <div className={`${styles.priceInfo} ${styles.price}`}>
                        ${totalPriceFormat}
                    </div>
                    
                </div>
                <div className={styles.buttonSection}>
                    <button className={styles.primarySubmitBtn} onClick={()=>{
                        onClose()
                    }}>取消</button>
                    <button className={styles.submitBtn} onClick={()=>{
                        handleSubmitOrder()
                        onClose()
                    }}>送出訂單</button>
                </div>
                
            </div>
        </div>
    )
}