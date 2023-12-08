import React from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "49b631c45785fe73d2a88477803dea22";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

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
