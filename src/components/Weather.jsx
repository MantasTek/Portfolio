import React, { useState, useEffect } from 'react';

const Weather = () => {
    const [lithuaniaWeather, setLithuaniaWeather] = useState(null);
    const [localWeather, setLocalWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    useEffect(() => {
        const fetchWeather = async (latitude, longitude, location) => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
                );
                if (!response.ok) {
                    throw new Error('Weather data fetch failed');
                }
                const data = await response.json();
                if (location === 'Lithuania') {
                    setLithuaniaWeather(data);
                } else {
                    setLocalWeather(data);
                }
            } catch (err) {
                console.error('Weather fetch error:', err);
                setError(`Failed to fetch ${location} weather data`);
            }
        };

        fetchWeather(54.6872, 25.2797, 'Lithuania');

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    fetchWeather(
                        position.coords.latitude,
                        position.coords.longitude,
                        'local'
                    );
                },
                (err) => {
                    console.error('Geolocation error:', err);
                    setError('Location access denied. Only Lithuania weather will be shown.');
                }
            );
        } else {
            setError('Geolocation is not supported by your browser. Only Lithuania weather will be shown.');
        }

        setLoading(false);
    }, [API_KEY]);

    if (loading) return (
        <div className="weather-loading">
            <p>Loading weather data...</p>
        </div>
    );

    return (
        <div className="weather-container">
            {error && <div className="weather-error">{error}</div>}
            
            {lithuaniaWeather && (
                <div className="weather-card">
                    <h3>Weather in Vilnius, Lithuania</h3>
                    <div className="weather-info">
                        <img 
                            src={`https://openweathermap.org/img/w/${lithuaniaWeather.weather[0].icon}.png`} 
                            alt="Weather icon"
                        />
                        <p className="temperature">{Math.round(lithuaniaWeather.main.temp)}°C</p>
                        <p className="description">{lithuaniaWeather.weather[0].description}</p>
                        <p className="details">
                            Humidity: {lithuaniaWeather.main.humidity}% | 
                            Wind: {Math.round(lithuaniaWeather.wind.speed)} m/s
                        </p>
                    </div>
                </div>
            )}

            {localWeather && (
                <div className="weather-card">
                    <h3>Local Weather in {localWeather.name}</h3>
                    <div className="weather-info">
                        <img 
                            src={`https://openweathermap.org/img/w/${localWeather.weather[0].icon}.png`} 
                            alt="Weather icon"
                        />
                        <p className="temperature">{Math.round(localWeather.main.temp)}°C</p>
                        <p className="description">{localWeather.weather[0].description}</p>
                        <p className="details">
                            Humidity: {localWeather.main.humidity}% | 
                            Wind: {Math.round(localWeather.wind.speed)} m/s
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;