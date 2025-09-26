import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1651029809614-dc2a1573320b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYXIlMjBlbnZpcm9ubWVudHxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1661962265372-f1184d7d4386?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdCUyMGVudmlyb25tZW50fGVufDB8fDB8fHww"
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1671490808715-1135473e2ccb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMGVudmlyb25tZW50fGVufDB8fDB8fHww"
    const RAINY_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKY0XyXSYbhD3shVzGtTdD9ZhS8fD90un2wQ&s"

    
  return (
    <div className="InfoBox">
         
         <div className='cardContainer'>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 
          ? RAINY_URL
          : info.temp > 15 
          ? HOT_URL 
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity > 80 
          ? <ThunderstormIcon />
          : info.temp > 15 
          ? <SunnyIcon />
          : <AcUnitIcon />
          }

        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'}} component="span">
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}</p>
          <p>Max Temp = {info.tempMax}</p>
          <p>The weather can be decribed as <i>{info.weather}</i> feels like {info.feelLike}&deg;C</p>
          <p></p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
  )
}

export default InfoBox