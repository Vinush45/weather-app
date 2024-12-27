import SearchBox from './searchbox.jsx'
import Infobox from "./infobox.jsx"
import {useState} from "react"
export default function WeatherApp(){
    let [weather,setWeather]=useState({
        city:"wanderland",
        humidity: 42,
        temp: 29.23,
        temp_max: 29.73,
        temp_min: 29.23,
        weather: "haze",
    });
     let [error,setError]=useState(false);

    let updateInfo=(newInfo)=>{
        setWeather(newInfo);
        setError(false);
    }
    let handleerr=()=>{
       setError(true);
    }
    
    return(
    <div style={{textAlign:"center"}} > 
    < h1>Weather App</h1>
    <SearchBox updateInfo={updateInfo} handleerr={handleerr}/>
    <Infobox info={weather} error={error} />
    </div>
    )
}