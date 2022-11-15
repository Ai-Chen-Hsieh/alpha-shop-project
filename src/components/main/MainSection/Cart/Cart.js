import './Cart.module.scss';
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

//產品列
function Products({data}){
    const products = data.map( product => 
            <section className='product' key={product.id}>
            <img className='productImg' src={product.img} alt=''></img>
            <div className='productInfo'>
                <div className='productName'>{product.name}</div>
                <div className='productControlContainer'>
                    <div className='productControl'>
                        <span className='countIcon'>&#8722;</span>
                        <span className='productCount'> 1 </span>
                        <span className='countIcon'>&#x2b;</span>
                    </div>
                </div>
                <div className='price'>$ {product.price}</div>
            </div>
        </section>
    );
    return(
        <>{products}</>
    )
}

//cart
export default function Cart(){

    return(
        <section className='CartSection'>
            <h3 className='cartTitle'>購物籃</h3>
            <section className='productList'>
                <Products data = {CartList}/>
            </section>
            <section className='cartInfoShipping'>
                    <div className="text">運費</div>
                    <div className="price">免費</div>
                </section>
            <section className='cartInfoTotal'>
                    <div className="text">小計</div>
                    <div className="price totalPrice">$ 300</div>
                </section>
        </section>
    )
}



