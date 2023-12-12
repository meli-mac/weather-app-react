import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.fahrenheit)}</span>
      <span className="degree">°F</span>
    </div>
  );
}
