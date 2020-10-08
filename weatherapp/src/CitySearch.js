import React, { useState, useRef, useEffect } from "react";
import {debounce} from "lodash"

import openWeather from "./api/OPenWeatherApi";
const CitySearch = () => {
  const [text, setText] = useState("");
  const debounceSearchRef = useRef(null)

  useEffect(()=>{
    const debouncedSearch = debounce(openWeather.get, 500)
    debounceSearchRef.current = debouncedSearch
  }, [])
  return (
    <section className="ui container">
      <form class="ui form">
        <div class="field">
          <label htmlFor="City Name">City Search</label>
          <input
            onChange={(e) => {
              setText(e.target.value);
            //   openWeather.get("", {
            //     params: {
            //       q: "Boston",
            //     },
            //   });
            debounceSearchRef.current("", {
                params: {
                    q: "Boston"
                }
            })
            }}
            value={text}
            type="text"
            name="City Name"
            placeholder="City Name"
          ></input>
        </div>
      </form>
    </section>
  );
};

export default CitySearch;
