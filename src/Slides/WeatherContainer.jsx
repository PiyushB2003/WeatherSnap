import React, { useContext } from 'react';
import BgSetter from '../components/BgSetter';
import WeatherCard from '../components/WeatherCard';
import { Context } from '../context/Context';

const WeatherContainer = () => {
    return (
        <>
            <div className='flex flex-row bg-black h-full w-full'>
                <BgSetter />
                <WeatherCard />
            </div>
        </>
    )
}

export default WeatherContainer