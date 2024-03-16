import React from 'react'
import a from './photo1.jpg'
import Card from './Card'
import SideBar from './SideBar';

const Home = (props) => {
    
    return (
        <div>
            <div className='flex md:flex-row flex-col md:justify-between items-center lg:h-[calc(100vh-50px)]'>
                <div className=' lg:w-1/2 flex justify-center items-center flex-col   '>
                    <p className='font-light md:text-xl text-sm mb-5 text-orange-600'> NEW TREND</p>
                    <h1 className='font-bold md:text-5xl text-sm mb-4'>AUTMUN SALE STYLISH</h1>
                    <button className='bg-orange-600 p-4 rounded font-semibold' >DISCOVER</button>
                </div>
                <img src={a} alt="hello" className='w-1/2' />
            </div>
            <SideBar/>
            <Card item={props.product} />
        </div>
    )
}

export default Home