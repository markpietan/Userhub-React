import React from "react";

const SevenDayForecast = ({ forecastWeather }) => {
  console.log(forecastWeather);
  return (
    <section>
      {forecastWeather.map((currentWeather) => {
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
          <div className="ui cards">
            <div className="card">
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
          </div>
        );
      })}
    </section>
  );
};

export default SevenDayForecast;
