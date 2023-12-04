import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  function handleResponse(response) {
    setweatherData({
      ready: true,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAYxJREFUaN7tmMERgyAQRS2BEizBEizBEiyBEizBEizBEiyB679Zgh1sLpsMIRgRAZOZdeYfNBPY94FdoCKi6p9VCYAACIAACIAAvF5OPgAUgBHACoAsrfxdVQmfpAAAOgCbE7irDUD3cwAA+oPAXXW3AABoAczs5MKuqwDnfSOhigJwsG4gDc9titDA/x8cNbkAPhbmzvcUMiEgwQDslNvJwr9RRvWpAFpP4xOAOjMAfRuJIAArt3vTYQEAEw3Awa8e55WVkeiuUQgBmD2ZQxUM/NVvLIDPeVM4+CQA603OXwZ4uq13MlEpLVah0wDqUADNDdzp/p7Gs5WYflDTvwMQgP4OgM2ey1zRdcSulgCY0gDGKoQTL9CJ3+00vbAO24zdjcY6rzhg78LcOabOKQCGBAAh6bhnwM0poNNVABU5R23V3wI5qAN7/ZszR8rOc4IKFrexXIDvPe22ya5VDq5bngs2dhTbrNcqBwAmUQIYiwNk2EPp0gBNrp2pXO4KgAAIgAAIgAAIgAC86wECCuvGtH3EIQAAAABJRU5ErkJggg==",
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Search City"
              autoFocus="on"
              className="citySearch"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="searchButton" />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Current 📍"
              className="currentLocationButton"
            />
          </div>
        </div>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="degree">°F</span>
            <img src={weatherData.iconUrl} alt={weatherData.description} />
          </div>
          <div className="col-6">
            <ul className="weatherOverview">
              <li>Feels like: 51°</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}mph</li>
              <li>Min. Temperature: 49°</li>
              <li>Max. Temperature: 60°</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "560eatef1f75aofbc96fd19f393b84ab";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
