import { createContext } from "react"
import { productsList } from './CartContext'

const totalPrice = productsList.reduce((acc, cur) => cur.price * cur.quantity + acc, 0)        


export const customerInfo = {
    name: 'John Doe',
    number: '1111 2222 3333 4444',
    expirydate:'MM/YY',
    cvc: '123',
    totalPrice: totalPrice
}

export const CustomerInfoContext = createContext(null)