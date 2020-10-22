import React, { useState, useRef, useEffect } from "react";
import { debounce } from "lodash";

import openWeather from "./api/OPenWeatherApi";
import TodayWeather from "./TodayWeather";
import SevenDayForecast from "./SevenDayForcast";
const Geographicsearch = () => {
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const debounceSearchRef = useRef(null);
  const [results, setResults] = useState(null);
  useEffect(() => {
    const debouncedSearch = debounce(openWeather.get, 800);
    debounceSearchRef.current = debouncedSearch;
  }, []);
  useEffect(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
           setLong(position.coords.longitude)
           setLat(position.coords.latitude)
        });
      }
    
  }, [])
  useEffect(() => {
    const networkRequest = async () => {
 

      let response = await openWeather.get("", {
        params: {
          lat : lat,
          lon : long
        },
      });
      setResults(response.data)
    };
    
    if(lat !== "" && long !== "") {
        networkRequest() 
    }
  }, [lat, long]);
  return (
    <section className="ui container">
      <form className="ui form">
        <div className="field">
          <label htmlFor="Longitude">Longitude Coordinant</label>
          <input
            onChange={ (e) => {
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
            onChange={ (e) => {
              setLat(e.target.value);
            }}
            value={lat}
            type="number"
            name="Latitude"
            placeholder="Latitude Coordinate"
          ></input>
        </div>
      </form>
      {results === null ? null : (
        <TodayWeather results={results}></TodayWeather>
      )}
      {results === null ? null : (
        <SevenDayForecast results={results}></SevenDayForecast>
      )}
    </section>
  );
};

export default Geographicsearch;