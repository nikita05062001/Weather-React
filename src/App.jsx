import "./App.css";
import React, { useState } from "react";
import Info from "./components/Info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "0bf697e3c6441c9026c29f0cca9385c7";

const App = () => {
  const [weatherData, setWeather] = useState({});

  const getData = async (e) => {
    const city = e.target.elements.city.value;
    const API_URL = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await API_URL.json();
    if (API_URL.ok) {
      setWeather({
        temp: data.main.temp || "???",
        city: data.name || "???",
        country: data.sys.country || "???",
        sunrise: data.sys.sunrise || "???",
        sunset: data.sys.sunset || "???",
        error: "",
      });
    } else {
      setWeather({
        error: "Неправильно введенный город или сервер не отвечает",
      });
    }
  };

  const error = weatherData.city ? (
    <Weather
      temp={weatherData.temp}
      city={weatherData.city}
      country={weatherData.country}
      sunrise={weatherData.sunrise}
      sunset={weatherData.sunset}
    />
  ) : (
    "Введите название города"
  );
  const content = weatherData.error ? weatherData.error : error;
  return (
    <div className="app">
      <div className="info-content">
        <Info />
      </div>
      <div className="form-content">
        <Form weatherSearch={getData} />
        <div className="form-info">{content}</div>
      </div>
    </div>
  );
};

export default App;
