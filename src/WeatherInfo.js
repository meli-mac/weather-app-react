import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherTemperature fahrenheit={props.data.temperature} />
          <img src={props.data.iconUrl} alt={props.data.description} />
        </div>
        <div className="col-6">
          <ul className="weatherOverview">
            <li>Feels like: {props.data.feelsLike}°</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}mph</li>
            <li>Min. Temperature: 49°</li>
            <li>Max. Temperature: 60°</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
