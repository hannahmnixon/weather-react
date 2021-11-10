import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in San Francisco is ${response.data.main.temp}°C`);
  }
  let apiKey = "a6ff4b7a9b12bc3ba444e702f94356c3";
  let apiUrl = `api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}
