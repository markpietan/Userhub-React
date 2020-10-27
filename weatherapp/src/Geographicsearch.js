import React, { useState, useEffect } from "react";

import OneCall from "./api/OpenOneCallApi";
import openWeather from "./api/OPenWeatherApi";
import TodayWeather from "./TodayWeather";
import SevenDayForecast from "./SevenDayForcast";
const Geographicsearch = () => {
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [debounceTerm, setdebounceTerm] = useState({});
  const [forecastWeather, setforecastWeather] = useState(null);
  const [todayWeather, settodayWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLong(position.coords.longitude);
        setLat(position.coords.latitude);
      });
    }
  }, []);
  useEffect(() => {
    const forecastRequest = async () => {
      let response = await OneCall.get("", {
        params: {
          lat: todayWeather.coord.lat,
          lon: todayWeather.coord.lon,
        },
      });
      console.log(response.data);
      let weatherArray = response.data.daily;
      weatherArray.shift();
      setforecastWeather(weatherArray);
    };
    if (todayWeather !== null) {
      forecastRequest();
    }
  }, [todayWeather]);
  useEffect(() => {
    const id = setTimeout(() => {
      if (lat !== "" && long !== "") {
        setdebounceTerm({ lat: lat, long: long });
      }
    }, 500);
    return function(){
      clearTimeout(id)
    }
  }, [lat, long]);
  useEffect(() => {
    const networkRequest = async () => {
      let response = await openWeather.get("", {
        params: {
          lat: lat,
          lon: long,
        },
      });
      settodayWeather(response.data);
    };

    if (lat !== "" && long !== "") {
      networkRequest();
    }
  }, [debounceTerm]);
  return (
    <section className="ui container">
      <form className="ui form">
        <div className="field">
          <label htmlFor="Longitude">Longitude Coordinant</label>
          <input
            onChange={(e) => {
              setLong(e.target.value);
            }}
            value={long}
            type="number"
            name="Longitude"
            placeholder="Longitude Coordinate"
          ></input>
        </div>
        <div className="field">
          <label htmlFor="Latitude">Latitude Coordinant</label>
          <input
            onChange={(e) => {
              setLat(e.target.value);
            }}
            value={lat}
            type="number"
            name="Latitude"
            placeholder="Latitude Coordinate"
          ></input>
        </div>
      </form>
      {todayWeather === null ? null : (
        <TodayWeather results={todayWeather}></TodayWeather>
      )}
      {forecastWeather === null ? null : (
        <SevenDayForecast forecastWeather={forecastWeather}></SevenDayForecast>
      )}
    </section>
  );
};

export default Geographicsearch;
