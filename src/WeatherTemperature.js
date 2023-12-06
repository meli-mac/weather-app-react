import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="degree">
          °F |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(celsius)}</span>
        <span className="degree">
          <a href="/" onClick={convertToCelsius}>
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
