import './Cart.module.scss';
import {useState} from 'react';
//產品資訊
const CartList = [
    {
      id: '1',
      name: '貓咪罐罐',
      img: 'https://picsum.photos/300/300?text=1',
      price: 100,
      quantity: 2,
    },
    {
      id: '2',
      name: '貓咪干干',
      img: 'https://picsum.photos/300/300?text=2',
      price: 200,
      quantity: 1,

    },
  ]


//cart
export default function Cart(){
    const [products, setProducts ] = useState(CartList);

    function handleIncreaseClick (productId) {
      //檢查點擊的按鈕id是否與CartList的id一樣，相同則表示找到相對應的物件count進行增減
        setProducts( products.map(product => {
            if(product.id === productId){  
                return {
                    ...product,
                    quantity: product.quantity + 1,
                };
            } else {
                return product
            }
        }))
    }

    function handleDecreaseClick(productId){
        let newProducts = products.map(product => {
            //檢查點擊的按鈕id是否與CartList的id一樣，相同則表示找到相對應的物件count進行增減
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
        newProducts = newProducts.filter(p => p.quantity > 0);
        setProducts(newProducts);
    }
    // total price計算
    function CalculateTotalPrice ({data}) {
        let totalPrice = 0;
        data.map(product => {
            totalPrice += (product.price *  product.quantity);
            return totalPrice;
          });
        return(
            <section className='cartInfoTotal'>
                <div className="text">小計</div>
                <div className="price totalPrice">$ {totalPrice}</div>
            </section>
        )
    }

    return (
        <section className='CartSection'>
            <h3 className='cartTitle'>購物籃</h3>
            <section className='productList'>
                {products.map(product => 
                    <section className='product' key={product.id}>
                    <img className='productImg' src={product.img} alt=''></img>
                    <div className='productInfo'>
                        <div className='productName'>{product.name}</div>
                        <div className='productControlContainer'>
                            <div className='productControl'>
                                <button className='countIcon' onClick={() => {
                                    handleDecreaseClick(product.id)
                                    }}>&#8722;</button>
                                <span className='productQuantity'> {product.quantity}</span>
                                <button className='countIcon' onClick={() => {
                                    handleIncreaseClick(product.id)
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
            <CalculateTotalPrice data={products}/>

        </section>
    )
}






