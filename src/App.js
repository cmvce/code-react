import "./styles.css";
import React, { useState } from "react";
import axios from "axios";
import bootstrap from "bootstrap";

function Weather(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setWeather({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,

      description: response.data.condition.description,
    });
  }

  function submit(event) {
    event.preventDefault();
    const apiKey = "80oc158tb64caae306c6eb4bf7cef14f";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="container">
      <header>
        <form className="formBox" onSubmit={submit}>
          <input
            type="text"
            placeholder="Enter a city..."
            className="searchBox w-50"
            onChange={updateCity}
          />
          <input type="submit" value="Submit" className="submitBox" />
        </form>
      </header>
      <main>
        <div className="current-weather text-warning">
          <div>
            <h1 className="current-city"> {city}</h1>
            <p className="details">
              <span className="date-time text-warning"> Saturday 16:00 </span>,{" "}
              {weather.description} <br />
              Humidity: <strong>{weather.humidity}%</strong>, Wind:{" "}
              <strong>{weather.wind}km/h</strong>
            </p>
          </div>
          <div className="current-temperature">
            <span className="temperature-icon"> </span>
            <span className="current-temperature-value">
              {Math.round(weather.temperature)}
            </span>
            <span className="current-temperature-unit">°C</span>
          </div>
        </div>
      </main>
      <footer>
        <p>
          This project was coded by
          <a href="/" target="_blank">
            {" "}
            Coleene Acevedo
          </a>{" "}
          and is
          <a href="/" target="_blank">
            {" "}
            on GitHub
          </a>{" "}
          and
          <a href="/" target="_blank">
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Weather;
