import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io"
import { IoIosAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import { CartContext } from './context/CartContext';
const CartItem = ({ item }) => {
    const { removeFromCart, increasAmount, decreaseAmont } = useContext(CartContext)
    const { id, title, image, price, amount } = item;
    return (
        <div className='flex'>
            <div className='w-full min-h-[150px] flex items-center gap-x-4'>
                <Link to={`/product/${id}`}>
                    <img className='max-w-[80px]' src={image} />
                </Link>
                <div className='w-full flex flex-col'>
                    {/*title & remove icon */}
                    <div className='flex justify-between mb-2'>
                        <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
                            {title}
                        </Link>
                        <div onClick={()=>removeFromCart(id)} className='text-xl cursor-pointer'><IoMdClose className='text-gray-500 hover:text-red-500 transition' /></div>
                    </div>
                    <div className=' flex gap-x-2 h-[36px] text-sm items-center justify-around'>
                        {/*qty */}
                        <div className='flex flex-1 max-w-[100px] 
                        items-center justify-around h-full  font-medium border
                        '>
                                {/*minus icon */}
                            <div onClick={() => decreaseAmont(id)} className=' cursor-pointer'>
                                    <AiOutlineMinus />
                                </div>
                                {/*amount*/}
                                <div className='h-full flex justify-center items-center px-2'>{amount}</div>
                                {/*plus icon*/}
                            <div onClick={() => increasAmount(id) }  className=' cursor-pointer'>
                                    <IoIosAdd />
                                </div>
                        </div>
                        {/*item price */}
                        <div className='flex-1 text-center'>${price}</div>
                        {/*final price*/}
                            <div className='
                            flex-1
                            text-center
                            '
                            >
                                {`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem