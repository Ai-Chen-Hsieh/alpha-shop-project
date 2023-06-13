import styles from './Main.module.scss'
import Register from './MainSection/Register/Register'
import Cart from './MainSection/Cart/Cart'
import { CustomerOrderProvider } from "Context/CustomerOrderContext"

export default function MainSection(){

    return (
        <main className="container">
            <h2 className={styles.registerTitle}>結帳</h2>
            <section className='mainContain'>
                <CustomerOrderProvider>
                    <Register/>
                    <Cart/>
                </CustomerOrderProvider>
            </section>
        </main>
    )
}