import React, { useState, useRef, useEffect } from "react";
import { debounce } from "lodash";
import OneCall from "./api/OpenOneCallApi";
import openWeather from "./api/OPenWeatherApi";
import TodayWeather from "./TodayWeather";
import SevenDayForecast from "./SevenDayForcast";
const Weatherpage = ({ parameterName, title }) => {
  const [text, setText] = useState("");
  const debounceSearchRef = useRef(null);
  const [todayWeather, settodayWeather] = useState(null);
  const [forecastWeather, setforecastWeather] = useState(null);
  useEffect(() => {
    const debouncedSearch = debounce(debounceWeatherSearch, 500);
    debounceSearchRef.current = debouncedSearch;
  }, []);
  const debounceWeatherSearch = (searchTerm) => {
    const networkRequest = async () => {
      console.log(searchTerm);

      let response = await openWeather.get("", {
        params: {
          [parameterName]: searchTerm,
        },
      });
      settodayWeather(response.data);
    };

    if (searchTerm !== "") {
      networkRequest();
    }
  };
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
    debounceSearchRef.current(text)
  }, [text]);
  return (
    <section className="ui container">
      <form className="ui form">
        <div className="field">
          <label htmlFor="City Name">{title}</label>
          <input
            onChange={(e) => {
              setText(e.target.value);
            }}
            e
            value={text}
            type="text"
            name="City Name"
            placeholder="City Name"
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

export default Weatherpage;
