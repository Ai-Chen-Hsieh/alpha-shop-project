import styles from './Main.module.scss'
import Register from './MainSection/Register/Register'
import Cart from './MainSection/Cart/Cart'
import { useState } from 'react'
import { CartListContext, productsList } from 'Context/CartContext'
import { CustomerInfoContext, customerInfo } from 'Context/CustomerContext'


export default function MainSection(){
    const [cartProducts, setCartProducts] = useState(productsList)
    const [info, setInfo] = useState(customerInfo)

    function handleIncreaseClick (productId) {
        //檢查點擊的按鈕id是否與CartList的id一樣，相同則表示找到相對應的物件count增加quantity
        const newProducts = cartProducts.map(product => {
            if(product.id === productId){  
                return {
                    ...product,
                    quantity: product.quantity + 1,
                };
            } else {
                return product
            }
        })
        setCartProducts(() => newProducts)
        const calculateTalPrice = newProducts.reduce((acc, cur) => cur.price * cur.quantity + acc, 0) 
        const calculateTalPriceFormat = new Intl.NumberFormat().format(calculateTalPrice);  
        setInfo({
            ...info,
            totalPrice: calculateTalPriceFormat
        })
      }

      function handleDecreaseClick(productId){
        let newProducts = cartProducts.map(product => {
            //檢查點擊的按鈕id是否與CartList的id一樣，相同則表示找到相對應的物件count減少quantity
            if(product.id === productId){
                return {
                    ...product,
                    quantity: product.quantity - 1,
                };
            } 
            else {
                return product
            }
        })
        //數量為0則移除購物車
        newProducts = newProducts.filter(p => p.quantity > 0)
        setCartProducts(() =>newProducts)
        const calculateTalPrice = newProducts.reduce((acc, cur) => cur.price * cur.quantity + acc, 0) 
        const calculateTalPriceFormat = new Intl.NumberFormat().format(calculateTalPrice);

        setInfo({
            ...info,
            totalPrice: calculateTalPriceFormat
        })
    }
    return (
        <main className="container">
            <h2 className={styles.registerTitle}>結帳</h2>
            <section className='mainContain'>
            <CustomerInfoContext.Provider value={{info, setInfo}}>
                <CartListContext.Provider value={{cartProducts, setCartProducts}}>
                    <Register/>
                    <Cart onHandleIncrease={handleIncreaseClick} onHandleDecrease={handleDecreaseClick} totalPrice={info.totalPrice}/>
                </CartListContext.Provider>
            </CustomerInfoContext.Provider>
            </section>
        </main>
    )
}