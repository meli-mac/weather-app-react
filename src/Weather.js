import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <input type="search" placeholder="Search City" autoFocus="on" />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" />
        </div>
        <div className="col-3">
          <input type="submit" value="Current 📍" />
        </div>
      </div>
      <h1>New York</h1>
      <ul>
        <li>Sun December 3, 2023</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <h2>51°</h2>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAYxJREFUaN7tmMERgyAQRS2BEizBEizBEiyBEizBEizBEiyB679Zgh1sLpsMIRgRAZOZdeYfNBPY94FdoCKi6p9VCYAACIAACIAAvF5OPgAUgBHACoAsrfxdVQmfpAAAOgCbE7irDUD3cwAA+oPAXXW3AABoAczs5MKuqwDnfSOhigJwsG4gDc9titDA/x8cNbkAPhbmzvcUMiEgwQDslNvJwr9RRvWpAFpP4xOAOjMAfRuJIAArt3vTYQEAEw3Awa8e55WVkeiuUQgBmD2ZQxUM/NVvLIDPeVM4+CQA603OXwZ4uq13MlEpLVah0wDqUADNDdzp/p7Gs5WYflDTvwMQgP4OgM2ey1zRdcSulgCY0gDGKoQTL9CJ3+00vbAO24zdjcY6rzhg78LcOabOKQCGBAAh6bhnwM0poNNVABU5R23V3wI5qAN7/ZszR8rOc4IKFrexXIDvPe22ya5VDq5bngs2dhTbrNcqBwAmUQIYiwNk2EPp0gBNrp2pXO4KgAAIgAAIgAAIgAC86wECCuvGtH3EIQAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: 51°</li>
            <li>Humidity: 98%</li>
            <li>Wind: 5mph</li>
            <li>Min. Temperature: 49°</li>
            <li>Max. Temperature: 60°</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
