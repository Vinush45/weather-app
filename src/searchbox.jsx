import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
 import "./searchbox.css";
import {useState} from "react";
export default function SearchBox({updateInfo , handleerr}){
  let [city,setCity]=useState("");
  let API_URL="http://api.openweathermap.org/data/2.5/weather";
  let API_KEY="7e91120c735eebb8ce8284162fd2ac2c";

  let getWeather= async()=>{
    try{
      let response= await fetch(`${API_URL}?q=${city }&appid=${API_KEY}&units=metric`);
    let jsonResponse= await response.json();
    let Result={
      city:city,
      temp:jsonResponse.main.temp,
      temp_min:jsonResponse.main.temp_min,
      temp_max:jsonResponse.main.temp_max,
      humidity:jsonResponse.main.humidity,
      weather:jsonResponse.weather[0].description,
    }
    console.log(Result);
    updateInfo(Result);
}
catch(err){
  console.log("hi")
   handleerr();
}
}    


  

   function handleChange (evt){
    setCity(evt.target.value);
   }
   let  handleSubmit = async (evt)=>{
    evt.preventDefault();
    console.log(city);
    getWeather();
   // console.log(newInfo);
    //updateInfo(newInfo);
    setCity(" ");
   }
   return(
    <div className="searchbox">
        <form  onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="city" variant="outlined" value={city} onChange={handleChange} required />
        <br /> <br />
        <Button variant="contained" type="submit" >
         search
      </Button >
        </form>
    </div>
   )
} 