import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import './card.css'
import { AiOutlinePlus, AiOutlineEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext';
const Card = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProduct(json)
            })

    }, [])
    const { addToCart }=useContext(CartContext)
    const pro = product.filter((e) => {
        if (e.category =="electronics") {
            return false
        }
        return true
    })
    
    return (
    <div className='flex  flex-wrap justify-center  '>
            {
                pro.map((e) => {
                    return (
                        
                        <div key={e.id} className=' w-[250px]   p-2 m-2  text-start overflow-hidden'>
                            <div className='relative group overflow-hidden'>
                                <div className='img  h-[300px] flex  justify-center border p-10 group-hover:p-8 transition-all ease-in-out '>
                                    <img className='h-full' src={e.image} />
                                </div>
                                <div className='absolute top-3 -right-11 group-hover:right-0   transition-all ease-in-out flex flex-col justify-center items-center gap-2  p-3'>
                                    <button className='bg-red-400 text-white p-2   drop-shadow-xl' onClick={()=>addToCart(e)}>
                                        <AiOutlinePlus/>
                                    </button>
                                    <Link to={'/product/'+ e.id} className='bg-white p-2 text-black drop-shadow-xl '>
                                        <AiOutlineEye/>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h1 className='font-bold text-gray-400'>{e.category}</h1>
                                <p className='text-lg'>{e.title}</p>
                            </div>
                            </div>
                        
                    )
                }) 
            }
        </div>
            )
}

export default Card