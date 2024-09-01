import React, { useContext } from 'react'
import { Context } from '../context/Context';

const WeatherData = () => {
    const { data } = useContext(Context);
    return (
        <>

            <div className='w-full mt-5 flex flex-col items-center mb-14'>
                <h2 className='w-[45%] border-x-0 pb-1 text-center border-white border text-2xl mb-5 capitalize font-semibold text-white'>{data.description}</h2>
                <h1 className='text-white text-5xl'>{data.temperature}<sup>o</sup>C</h1>
                <p className='text-lg capitalize text-white font-semibold'>{data.cityname}</p>
            </div>

            <div className='w-full flex flex-row items-end justify-center text-white'>
                <div className='flex flex-row items-center justify-between mr-4'>
                    <div className='flex flex-col items-center'>
                        <h2 className='font-bold text-4xl'>{data.humidity}%</h2>
                        <p className='text-xl font-lightbold'>Humidity</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-col items-center'>
                        <h2 className='font-bold text-4xl'>{data.ws} km/h</h2>
                        <p className='text-xl font-lightbold'>Wind speed</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherData