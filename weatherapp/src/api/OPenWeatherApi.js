import axios from "axios"


const openWeatherCityName = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
    params: {
        
        // appid: "a2594e5b28bebe16ec65f9ae5ce04c47",
        appid: "5dd22c53579207aa4f23d8438bd2334a",
      
        
    }
})

export default openWeatherCityName