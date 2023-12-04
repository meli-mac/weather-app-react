import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
      </div>
      <footer>
        <a href="https://github.com/meli-mac/weather-app-react">
          Open-source code
        </a>{" "}
        by Melissa Machado
      </footer>
    </div>
  );
}
