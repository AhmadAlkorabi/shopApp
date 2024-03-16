import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from './context/CartContext'
import SideBar from './SideBar'
const ItemDetails = () => {
    const {addToCart}= useContext(CartContext)
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => res.json())
            .then(json => {
                setProduct(json)
            })

    }, [])
    const params = useParams()
    return (
        <div className='flex md:flex-row flex-col justify-center items-center md:gap-36 sm:gap-10 h-[calc(100vh-80px)]'>
                <img className='h-[300px]' src={product.image} />
            <div className='w-80  md:w-[400px] lg:w-[600px]  ' >
                <h1 className='font-bold text-2xl'>{product.title}</h1>
                <p className='text-red-500 text-lg'>${product.price}</p>
                <p className='text-sm text-gray-400 mt-4'>{product.description}</p>
                <div className='bg-black cursor-pointer text-white p-3 text-center rounded mt-3' onClick={() => {
                    
                    addToCart(product, product.id)
                }}>add to cart</div>
            </div>
            <SideBar/>
        </div>
    )
}

export default ItemDetails