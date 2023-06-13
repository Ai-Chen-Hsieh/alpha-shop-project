import { createContext, useState } from "react"

export const initialAddress = {
    '稱謂': '',
    '姓名': '',
    '電話': '',
    'email': '',
    '縣市': '',
    '地址': ''
}

export const initialShipping = {
    method: '',
    price: '',
}

export const initialPayInfo = {
    name: '',
    number: '',
    expirydate: '',
    cvc: '',
}

export const initialProducts = [
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
      }
]

export const CustomerContext = createContext(null);
export const CustomerOrderProvider = ({ children }) => {
    const [ address, setAddress ] = useState(initialAddress)
    const [ shipping, setShipping ] = useState(initialShipping)
    const [ payInfo, setPayInfo ] = useState(initialPayInfo)
    const [ products, setProduct ] = useState(initialProducts)

    const productTotalPrice = products.reduce((acc, cur) => cur.price * cur.quantity + acc, 0)
    const productPriceFormat = new Intl.NumberFormat().format(productTotalPrice);  
    const totalPrice = productTotalPrice + Number(shipping.price);
    const totalPriceFormat = new Intl.NumberFormat().format(totalPrice);  

    
    //處理商品數量，增加1
    function handleIncreaseClick (productId) {
        //檢查點擊的按鈕id是否與CartList的id一樣，相同則表示找到相對應的物件count增加quantity
        const newProducts = products.map(product => {
            if(product.id === productId){  
                return {
                    ...product,
                    quantity: product.quantity + 1,
                };
            } else {
                return product
            }
        })
        setProduct(() => newProducts)
    }

    //處理商品數量，減少1
    function handleDecreaseClick(productId){
        let newProducts = products.map(product => {
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
        setProduct(() =>newProducts)
    }   

    //處理訂單資料
    function handleOrder (e, order) {
        if(order === 'address'){
            setAddress((preAddress) => {
                return {
                    ...preAddress,
                    [e.target.name]: e.target.value
                }
            })
        } else if (order === 'shipping'){
            setShipping(() => {
                const value = e.target.value;
                const method = value.split(' ')[0];
                const price = value.split(' ')[1] === '免費' ? 0 : value.split(' ')[1];
                return {
                    'method': method,
                    'price': price
                }
            })
        } else if (order === 'payInfo'){
            setPayInfo((prePayInfo) => {
                return {
                    ...prePayInfo,
                    [e.target.name]: e.target.value
                }
            })
        }
    }

    //處理送出訂單
    function handleSubmitOrder () {
        console.log(address, shipping, payInfo, products)
        //清除訂購資料
        setAddress(()=>{
            return{
                '稱謂': '',
                '姓名': '',
                '電話': '',
                'email': '',
                '縣市': '',
                '地址': ''
            }
        })
        setShipping(()=>{
            return{
                method: '',
                price: '',
            }
        })
        setPayInfo(() => {
            return {
                name: 'John Doe',
                number: '1111 2222 3333 4444',
                expirydate: 'MM/YY',
                cvc: '123',
            }
        })
    }

    return (
        <CustomerContext.Provider value={{address, shipping, payInfo, products, productTotalPrice, productPriceFormat, totalPriceFormat, handleOrder, handleIncreaseClick, handleDecreaseClick, handleSubmitOrder}}>
            {children}
        </CustomerContext.Provider>
    )
}

