import React, { useEffect, useState, useRef } from 'react';
import { Context } from './Context';

const ContextProvider = (props) => {
    const [city, setCity] = useState("Nagpur");
    const [data, setData] = useState({});
    let [WeatherBg, setWeatherBg] = useState("");
    const InputRef1 = useRef();
    const InputRef2 = useRef();
    const search = async (city) => {
        if (!city) return;

        try {
            let BASE_URL = `${process.env.REACT_APP_BASE_URL}/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

            let response = await fetch(BASE_URL);
            if (!response.ok) {
                console.error("API call failed with status:", response.status);
                return;
            }

            let data = await response.json();

            setWeatherBg(data?.weather[0]?.main);
            
            setData({
                cityname: data?.name,
                description: data?.weather[0]?.main,
                temperature: Math.floor(data?.main?.temp),
                icon: data?.weather[0]?.icon,
                humidity: data?.main?.humidity,
                ws: data?.wind?.speed,
            });
        } catch (error) {
            console.error("Error fetching the data:", error);
        }
    }
    useEffect(() => {
        search(city);
    }, [city]);

    const contextValue = {
        data,
        InputRef1,
        InputRef2,
        WeatherBg,
        setData,
        setCity
    }


    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
