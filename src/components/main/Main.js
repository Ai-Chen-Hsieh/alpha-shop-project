import styles from './Main.module.scss'

import Register from './MainSection/Register/Register.js'
import Cart from './MainSection/Cart/Cart.js'


export default function MainSection(){
    return (
        <main>
        <h2 className={styles.registerTitle}>結帳</h2>
        <section className='container mainContain'>
            <Register/>
            <Cart />
        </section>
        </main>
    )
}