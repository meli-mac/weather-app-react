import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.date.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <img alt="icon" src="https://openweathermap.org/img/wn/04n@2x.png" />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temp-min">{minTemperature()}°</span> |{" "}
        <span className="WeatherForecast-temp-max">{maxTemperature()}°</span>
      </div>
    </div>
  );
}
