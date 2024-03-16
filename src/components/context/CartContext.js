import React ,{ createContext , useState,useEffect} from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    // item amount state
    const [itemAmount, setItemAmount] = useState(0);
    // total price state
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount;
        }, 0);
        setTotal(total);
    })
    // update item amount 
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumlator, currentItem) => {
                return accumlator + currentItem.amount;
            }, 0);
            setItemAmount(amount)
        }
    },[cart])
    const addToCart = (e) => {
        const newItem = { ...e, amount: 1 }
        const cartItem = cart.find((item) => {
            return item.id === e.id
        })
        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === e.id) {
                    return { ...item, amount: cartItem.amount + 1 }
                } else {
                    return item;
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, newItem])
        }
    }
    
    // remove from cart
    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        })
        setCart(newCart)
    }
    // clear cart
    const clearCart = () => {
        setCart([])
    }
    // increas amount
    const increasAmount = (id) => {
       const item = cart.find((item)=>item.id===id)
        addToCart(item)
    }
    const decreaseAmont = (id) => {
        const cartItem = cart.find((item)=>item.id===id)
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return{...item,amount : cartItem.amount-1}
                } else {
                    return item
                }
            })
            setCart(newCart)
        } 
            if (cartItem.amount < 2) {
                removeFromCart(id)
            }
        
    }
    return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increasAmount, decreaseAmont ,itemAmount ,total}}> 
        {children}
    </CartContext.Provider>

}
export default CartProvider