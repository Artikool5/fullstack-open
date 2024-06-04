import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_KEY;

function WeatherInfo({ latlon }) {
  const [weather, setWeather] = useState(null);
  const [lat, lon] = latlon;

  useEffect(() => {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    );
    response
      .then((r) => setWeather(r.data))
      .catch((e) =>
        console.log(
          "Error during loading weather data.\nAPI key might be invalid",
          e,
        ),
      );
  }, []);

  return !weather ? null : (
    <>
      <h2>The weather in {weather.name}</h2>
      <p>Temperature {weather.main.temp}&deg; Celcius</p>
      <p>Wind {weather.wind.speed}m/s</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
    </>
  );
}

export default WeatherInfo;
