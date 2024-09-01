import React, { useContext } from 'react';
import wal1 from "../Images/wal1.jpg";
import WeatherData from './WeatherData';
import { Context } from '../context/Context';

const WeatherCard = () => {
    const {InputRef2, setCity} = useContext(Context);
    return (
        <>
            <div className='lg:w-[30%] md:w-[40%] hidden h-full bg-slate-800 md:flex flex-col justify-around bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url('${wal1}')` }}>
                <form
                    className="md:flex flex-row mt-3 hidden justify-center"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const cityValue = InputRef2.current.value;
                        setCity(cityValue);
                        InputRef2.current.value = "";
                    }}
                >
                    <input
                        ref={InputRef2}
                        placeholder="Search by city name"
                        type="search"
                        name="city"
                        className="font-semibold px-4 w-[70%] h-10 outline-none border-none rounded-full"
                    />
                    <button className="flex items-center justify-center mx-3 bg-white rounded-[50%] h-10 w-10">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
                <WeatherData />
            </div>
        </>
    )
}

export default WeatherCard;