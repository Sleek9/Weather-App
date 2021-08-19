import React from "react";
import "./WeatherDetails.css";

const WeatherDetails = ({ response }) => {
  if (!response) return null;

  let data = response.weather[0];

  return (
    <div className="card">
      <p className="city">
        Clima de {response.name}, {response.sys.country}
      </p>
      <div className="imagen">
        <img
          src={`http://openweathermap.org/img/wn/${data.icon}@4x.png`}
          alt=""
        />
        <p className="description">{data.description}</p>
      </div>
      <div className="temp">
        <p className="tempC">{response.main.temp}°C</p>
        <p className="tempFeels">Se siente como {response.main.feels_like}°C</p>
      </div>
    </div>
  );
};

export default WeatherDetails;
