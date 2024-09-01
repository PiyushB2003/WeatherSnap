import React, { useState, useEffect, useContext } from 'react';
import { WeatherBackground } from '../Background';
import { Context } from '../context/Context';
import WeatherData from './WeatherData';

const BgSetter = () => {
  const {InputRef1, setCity, WeatherBg} = useContext(Context);
  let currTime = new Date().toLocaleTimeString();
  let currDate = new Date().toDateString();
  let [time, setTime] = useState(currTime);
  let [date, setDate] = useState(currDate);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    const myDate = setInterval(() => {
      setDate(new Date().toDateString());
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(myDate);
    };
  }, []);

  return (
    <div id='mybg' className="h-full w-full md:w-[70%] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url("${WeatherBackground[WeatherBg]}")` }}>

      <div className='h-full w-full md:hidden'>
        <form
          className="flex flex-row md:hidden mt-3 justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            const cityValue = InputRef1.current.value;

            setCity(cityValue);

            InputRef1.current.value = "";
          }}
        >
          <input
            ref={InputRef1}
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

      <div className='h-full w-full hidden sm:flex flex-row justify-between items-end'>
        <div className='text-white sm:flex flex-col items-center m-2'>
          <h2 className='text-5xl'>{time}</h2>
          <p className='text-xl font-semibold'>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default BgSetter;