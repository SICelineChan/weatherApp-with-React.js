import React, { useState } from 'react';
import './styles.css';

export default function App() {
  const myApiKey = 'fe9b9d62a21b37d39baab5ed769d8339';
  const [weatherInfo, setWeatherInfo] = useState([{}]);
  const [city, setCity] = useState([]);

  const getWeather = (event) => {
    if (event.key === 'Enter') {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}&units=metric`
      )
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          setWeatherInfo(data);
          setCity('');
          console.log(data);
        });
    }
  };

  return (
    <>
      <div className="main">
        <div className="topContainer">
          <h2> Hello and welcome to this weather app </h2>

          <div className="inputBox1">
            <input
              className="input"
              type="text"
              placeholder="Enter a city"
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={getWeather}
            />

            {typeof weatherInfo.main === 'undefined' ? (
              <div>
                <p>Please enter in a city to get the weather information!</p>
              </div>
            ) : (
              <div>
                <p>{weatherInfo.name}</p>
                <p>{weatherInfo.main.temp}&deg;C (Celsius) </p>
                <p>{weatherInfo.weather[0].main} </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
