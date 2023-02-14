import { React, useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const myApiKey = 'fe9b9d62a21b37d39baab5ed769d8339';
  const [weatherInfo, setWeatherInfo] = useState([{}]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    const getWeather = (event) => {
      if (event.key == 'Enter') {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}`
        )
          .then(function (res) {
            return res.json();
          })
          .then(function (data) {
            setWeatherInfo(data);
            console.log(data);
          });
      }
    };
  }, []);
}

return (
  <>
    <div className="topContainer">
      <h2> Hello and welcome to this weather app </h2>
    </div>
    <div className="inputBox1">
      <input
        className="input"
        type="text"
        placeholder="Enter a city"
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  </>
);
