import React from 'react'
import "./TodayWeather.css"
    
const TodayWeather = ({results}) => {
return (
  <div id= "today" style={{display: "flex", justifyContent: "center", margin: "15px 0"}}>
    <div className="ui card">
  <div className="content">
<div className="header">{results.name}</div>
  </div>
  <div className="content">
    <h4 className="ui sub header">Daily Forecast</h4>
    <div className="ui small feed">
      <div className="event">
        <div className="content">
          <div className="summary">
              <img src= {`http://openweathermap.org/img/wn/${results.weather[0].icon}.png`} alt= {`Weather Forecast`}></img>
          {results.weather[0].description}</div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary">
          Temp:{results.main.temp}
          Min-Temp:{results.main.temp_min}
          Max-Temp:{results.main.temp_max}
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary">
          Humidity: {results.main.humidity}%
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
)
}




export default TodayWeather

/*Day Icons:
openweather.org/img/wn/01d.png - clear sky  id:800 -
{
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
openweather.org/img/wn/02d.png - few clouds
openweather.org/img/wn/03d.png - scattered clouds
openweather.org/img/wn/04d.png - broken clouds
openweather.org/img/wn/09d.png - shower rain
openweather.org/img/wn/10d.png - rain
openweather.org/img/wn/11d.png - thunderstorm
openweather.org/img/wn/13d.png - snow
openweather.org/img/wn/50d.png - mist

*/