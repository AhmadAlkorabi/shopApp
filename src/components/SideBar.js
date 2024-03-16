import React, { useContext } from 'react'
import { SideBarContext } from './context/SideBarContext'
import { CartContext } from './context/CartContext';
import { FaArrowRight } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import CartItem from './CartItem';
const SideBar = () => {
    const { isOpen, handlClose } = useContext(SideBarContext)
    const { cart, clearCart, total, itemAmount } = useContext(CartContext)
    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl first-letter:
        md:w-[35vw] xl:w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className='flex justify-between items-center py-6 border-b'>
                <div className='uppercase text-sm font-semibold'>Shopping Bag({cart.length})</div>
                <div onClick={handlClose} className='cursor-pointer w-8 h-8 flex justify-center items-center '><FaArrowRight className='text-2xl' /></div>
            </div>
            <div className=' flex flex-col gap-y-2 h-[520px] lg:h-[540px] overflow-y-auto overflow-x-hidden border-b '>
                {cart.map((e) => {
                return <CartItem item={e}  key={e.id}/>
            })}</div>
            <div>
                <div className='flex w-full justify-between items-center'>
                    {/* total*/}
                    <div>
                        <span>total</span>${parseFloat(total).toFixed(2)}
                    </div>
                    {/* clear all*/}
                    <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
                        <FaTrashAlt />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar