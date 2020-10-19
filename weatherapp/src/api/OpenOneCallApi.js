import axios from 'axios'


const OneCall = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/onecall",
    params: {

        exclude: "current,minutely,hourly,alert",
        units: "imperial",
        
        // appid: "a2594e5b28bebe16ec65f9ae5ce04c47",
        appid: "5dd22c53579207aa4f23d8438bd2334a",
      
        
    }
})
 export default OneCall