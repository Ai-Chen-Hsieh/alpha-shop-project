import './Cart.module.scss';
import { CartListContext } from '../../../../Context/CartContext'
import { useContext} from 'react';

//cart
export default function Cart({onHandleIncrease, onHandleDecrease, totalPrice}){
    const {cartProducts } = useContext(CartListContext)

    return (
        <section className='CartSection'>
            <h3 className='cartTitle'>購物籃</h3>
            <section className='productList'>
                {cartProducts.map(product => 
                    <section className='product' key={product.id}>
                    <img className='productImg' src={product.img} alt=''></img>
                    <div className='productInfo'>
                        <div className='productName'>{product.name}</div>
                        <div className='productControlContainer'>
                            <div className='productControl'>
                                <button className='countIcon' id='plus' onClick={() => {
                                    onHandleDecrease(product.id)
                                    }}>&#8722;</button>
                                <span className='productQuantity'> {product.quantity}</span>
                                <button className='countIcon' id='minus' onClick={() => {
                                    onHandleIncrease(product.id)
                                    }}>&#x2b;</button>
                            </div>
                        </div>
                        <div className='price'>$ {product.price * product.quantity}</div>
                    </div>
                    </section>
                )}
            </section>
            <section className='cartInfoShipping'>
                    <div className="text">運費</div>
                    <div className="price">免費</div>
            </section>
            <section className='cartInfoTotal'>
                <div className="text">小計</div>
                <div className="price totalPrice">$ {totalPrice} </div>
            </section>
        </section>
    )
}






