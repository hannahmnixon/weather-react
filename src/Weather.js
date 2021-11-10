import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App(props) {
  let [city, setCity] = useState("");
  /* let [place, setPlace] = useState("");*/
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState(null);
  function showTemperature(response) {
    console.log(response.data);
    setTemperature(`Temperature: ${Math.round(response.data.main.temp)}°C`);
    setDescription(`Description: ${response.data.weather[0].description}`);
    setHumidity(`Humidity: ${response.data.main.humidity}%`);
    setWind(`Wind: ${response.data.wind.speed}km/h`);
    let iconName = response.data.weather[0].icon;
    setIcon("https://openweathermap.org/img/wn/" + iconName + "@2x.png");
  }
  function handleSubmit(event) {
    event.preventDefault();
    /*setPlace(`City: ${city}`);*/
    console.log(city);
    let apiKey = "04dd91307ec56c5bdc7c8b53d6799c73";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  function updateChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <a href="https://github.com/hannahmnixon/weather-react.git" alt="">
        Coded by Hannah Nixon
      </a>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a city" onChange={updateChange} />
        <input type="submit" />
      </form>
      <h3>{temperature}</h3>
      <h3>{description}</h3>
      <h3>{humidity}</h3>
      <h3>{wind}</h3>
      <img src={icon} alt="" />
    </div>
  );
}
