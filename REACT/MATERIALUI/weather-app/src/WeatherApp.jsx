import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
import "./WeatherApp.css";

function WeatherApp() {
    const [weatherInfo , setWeatherInfo]  = useState({
      city: "Delhi",
      feelLike:43.97,
      humidity:60,
      temp: 36.97,
      tempMax: 36.97,
      tempMin: 36.97,
      weather:"broken clouds",
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }


  return (
    <div className="WeatherApp" style = {{textAlign: "center"}}>
        <h2>Wheather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp