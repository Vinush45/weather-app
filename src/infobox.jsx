import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./infobox.css"


export default function Infobox({info , error}){
    const IMG_URL="https://images.unsplash.com/photo-1696912158241-be58ad220dcc?q=80&w=1394&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const hot_url="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const cool_url="https://images.unsplash.com/photo-1711927828681-8708aad6a319?q=80&w=1338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const rain_url="https://images.unsplash.com/photo-1558920778-a82b686f0521?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let style={
     color:"red",
    }
    return(
         
        <div className="info-box">
           {error && <p style={style}>no such location exists</p>}
           
        <div class="card">
       <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
        image={info.humidity>80? rain_url:info.temp>15?hot_url:cool_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80? <ThunderstormIcon/> :info.temp>15?<WbSunnyIcon/>:<AcUnitIcon />}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature= {info.temp}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>max Temp={info.temp_max}&deg;C</p>
         <p>min Temp={info.temp_min}&deg;C</p>
         <p>weather can be described as {info.weather}</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
   
           </div>
        
    )
}