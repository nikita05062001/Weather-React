import React from "react";

const Weather = ({ temp, city, country, sunrise, sunset }) => {
  const date = new Date(sunrise * 1000);
  const sunrise_date =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const date2 = new Date(sunset * 1000);
  const sunset_date =
    date2.getHours() + ":" + date2.getMinutes() + ":" + date2.getSeconds();
  return (
    <div className="weather">
      <p>Температура: {temp}</p>
      <p>Город: {city}</p>
      <p>Страна: {country}</p>
      <p>Рассвет: {sunrise_date}</p>
      <p>Закат: {sunset_date}</p>
    </div>
  );
};
export default Weather;
