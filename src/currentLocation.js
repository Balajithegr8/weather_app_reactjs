import React from 'react';
import './currentLocation.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import apiKeys from "./apiKeys";
import Geticon from './geticon.js';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import loader from "./static/WI.gif";

const CurrentLocation = () => {

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [permissionGranted, setPermissionGranted] = useState(false);

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiKey = 'YOUR_OPENWEATHER_API_KEY';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeys.openWeatherMap}&units=metric`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                alert('City not found');
                throw new Error('City not found');

            }
            const data = await response.json();
            setWeather(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                    setPermissionGranted(true);
                    getWeather(position.coords.latitude, position.coords.longitude);
                }, (error) => {
                    console.error('Error getting location:', error);
                });
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        };

        getLocation();
    }, []); // Empty dependency array to run once on component mount


    const getWeather = async (lat, lng) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKeys.openWeatherMap}&units=metric`
            );

            if (response.data) {
                setWeather(response.data);
            }
        } catch (error) {
            console.error('Error fetching weather:', error);
        }
    };



    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup the interval on unmount
    }, []);

    const day = currentDateTime.toLocaleDateString(undefined, { weekday: 'long' });
    const date = currentDateTime.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' });
    const time = currentDateTime.toLocaleTimeString();

    return (

        <div className="overlay">
            {permissionGranted ? (
                <>
                    <div className="overlay-content">
                        <div className="overlay-left" >

                            <h2 className='state'>{weather ? weather.name : 'Loading...'}<br></br>{weather ? weather.sys.country : 'Loading...'}</h2>
                            <p className='temp'>{weather ? Math.round(weather.main.temp) : '0'}°C</p>
                            <p className='day'>{day}, {date}</p>
                            <p className='time'>{time}</p>

                        </div>
                        <div className="overlay-right">

                            <div className="weather-icon">
                                <Geticon weather={weather} />
                            </div>

                            <p className='weather'>{weather ? weather.weather[0].main : 'Loading...'}</p>
                            <hr className='line' />
                            <form className='search-bar' onSubmit={handleSubmit}>
                                <input
                                    type="text" className='holder'
                                    placeholder="Enter city name"
                                    value={city}
                                    onChange={handleChange}
                                />
                                <style>
                                    {`
                            ::placeholder {
                                color: White;
                                     }
                            `}
                                </style>
                                <button type="submit" className='button'><SearchOutlinedIcon /></button>
                                <hr className='line2' />
                            </form>

                            <div className='data'>
                                <p><div className='yoo'>Humidity</div><div className='yooo'>{weather ? weather.main.humidity : 'Loading...'}%</div><hr className='l3' /></p>
                                <p><div className='yoo'>Wind Speed</div><div className='yooo'>{weather ? weather.wind.speed : 'Loading...'}m/s</div><hr className='l3' /></p>
                                <p><div className='yoo'>Wind Direction</div><div className='yooo'>{weather ? weather.wind.deg : 'Loading...'}°</div><hr className='l3' /></p>
                                <p><div className='yoo'>Cloudiness</div><div className='yooo'>{weather ? weather.clouds.all : 'Loading...'}%</div><hr className='l3' /></p>
                                <p><div className='yoo'>Pressure</div><div className='yooo'>{weather ? weather.main.pressure : 'Loading...'}hPa</div><hr className='l3' /></p>
                                <p><div className='yoo'>Visibility</div><div className='yooo'>{weather ? weather.visibility : 'Loading...'}m</div></p>
                            </div>

                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='loader'>
                        <img src={loader} style={{ width: "50%" }} alt='loading' />
                        <p className='detect'>Detecting your location</p>
                        <p>Your current location wil be displayed on the App & used for calculating Real time weather.</p>
                    </div>
                </>
            )}

        </div>

    );
}

export default CurrentLocation;