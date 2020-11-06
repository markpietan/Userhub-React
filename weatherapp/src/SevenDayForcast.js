import React , {useState} from "react";
import "./SevenDayForecast.css";
import { CSSTransition } from 'react-transition-group'
const SevenDayForecast = ({ forecastWeather, triggerAnim }) => {
  console.log(forecastWeather);
  return (
    <section>
      <CSSTransition in= {triggerAnim} timeout= {500} classNames= "Seven" appear= {true}>
      <div className="ui cards" id= "sevenday">
        {forecastWeather !== null && forecastWeather.map((currentWeather) => {
          var date = new Date(currentWeather.dt * 1000);
          // Hours part from the timestamp
          var year = date.getFullYear();
          // Minutes part from the timestamp
          var month = date.getMonth() + 1;
          // Seconds part from the timestamp
          var day = date.getDate();

          // Will display time in 10:30:23 format
          var formattedTime = month + "/" + day + "/" + year;

          console.log(formattedTime);

          return (
            <div className="card" key= {currentWeather.dt}>
              <div className="content">
                <div className="header">{formattedTime}</div>
                <div className="meta">
                  <img
                    src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
                    alt={`Weather Forecast`}
                  ></img>
                  {currentWeather.weather[0].description}
                </div>
                <div className="summary">
                  Temp:{currentWeather.temp.day}
                  Max-Temp:{currentWeather.temp.max}
                  Min-Temp:{currentWeather.temp.min}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </CSSTransition>
    </section>
  );
};

export default SevenDayForecast;
