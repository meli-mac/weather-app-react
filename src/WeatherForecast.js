import React from "react";
import WeatherInfo from "./WeatherInfo";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thur</div>
          <img src="https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png" />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-min">19°</span> |{" "}
            <span className="WeatherForecast-temp-max">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
