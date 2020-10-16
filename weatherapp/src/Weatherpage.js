import React, { useState, useRef, useEffect } from "react";
import { debounce } from "lodash";

import openWeather from "./api/OPenWeatherApi";
import TodayWeather from "./TodayWeather";
const Weatherpage = ({ parameterName, title}) => {
  const [text, setText] = useState("");
  const debounceSearchRef = useRef(null);
  const [results, setResults] = useState(null);
  useEffect(() => {
    const debouncedSearch = debounce(openWeather.get, 800);
    debounceSearchRef.current = debouncedSearch;
  }, []);
  useEffect(() => {
    const networkRequest = async () => {
        console.log(text)

      let response = await openWeather.get("", {
        params: {
          [parameterName]: text
        },
      });
      setResults(response.data)
    };
    
    if(text !== "") {
        networkRequest() 
    }
  }, [text]);
  return (
    <section className="ui container">
      <form className="ui form">
        <div className="field">
          <label htmlFor="City Name">{title}</label>
          <input
            onChange={ (e) => {
              setText(e.target.value);
            }}
            value={text}
            type="text"
            name="City Name"
            placeholder="City Name"
          ></input>
        </div>
      </form>
      {results === null ? null : (
        <TodayWeather results={results}></TodayWeather>
      )}
    </section>
  );
};

export default Weatherpage;
