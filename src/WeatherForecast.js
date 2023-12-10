import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "a710bd8bd76400c9658ef649d9e81728";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thur</div>
          <img alt="icon" src="https://openweathermap.org/img/wn/04n@2x.png" />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-min">19°</span> |{" "}
            <span className="WeatherForecast-temp-max">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
