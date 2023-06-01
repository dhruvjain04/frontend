import Navbar from "./Navbar";



import React from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBIcon,

} from "mdb-react-ui-kit";
import axios from 'axios';



import { useState,useEffect } from "react";



const API_KEY='d681f6b1f3msh03b361794e16737p1e1c6ejsnfdda40896114';

function getWeatherIcon(weatherCode) {
  switch (weatherCode) {
    case 2:
      return <i class="fas fa-sun" style={{fontSize:"20px"}}></i>; // Sunny
    case 3:
      return <i class="fas fa-cloud-sun" style={{fontSize:"20px"}}></i>; // Mostly sunny
    case 4:
      return <i class="fas fa-cloud-sun" style={{fontSize:"20px"}}></i>; // Partly sunny
    case 5:
      return <i class="fas fa-cloud" style={{fontSize:"20px"}}></i>; // Mostly cloudy
    case 6:
      return <i class="fas fa-cloud" style={{fontSize:"20px"}}></i>; // Cloudy
    case 7:
      return <i class="fas fa-cloud" style={{fontSize:"20px"}}></i>; // Overcast
    case 8:
      return <i class="fas fa-cloud" style={{fontSize:"20px"}}></i>; // Overcast with low clouds
    case 9:
      return <i class="fas fa-smog" style={{fontSize:"20px"}}></i>; // Fog
    case 10:
    case 11:
    case 12:
    case 32:
      return <i class="fas fa-cloud-rain" style={{fontSize:"20px"}}></i>; // Light rain, Rain, Possible rain, Rain shower
    case 13:
      return <i class="fas fa-poo-storm" style={{fontSize:"20px"}}></i>; // Rain shower
    case 14:
    case 33:
      return <i class="fas fa-bolt" style={{fontSize:"20px"}}></i>; // Thunderstorm, Local thunderstorms
    case 15:
      return <i class="fas fa-bolt" style={{fontSize:"20px"}}></i>; // Local thunderstorms
    case 16:
    case 17:
    case 18:
    case 34:
      return <i class="fas fa-snowflake" style={{fontSize:"20px"}}></i>; // Light snow, Snow, Possible snow, Snow shower
    case 19:
    case 35:
      return <i class="fas fa-cloud-meatball" style={{fontSize:"20px"}}></i>; // Snow shower, Rain and snow
    case 20:
    case 21:
    case 22:
      return <i class="fas fa-cloud-meatball" style={{fontSize:"20px"}}></i>; // Rain and snow
    case 23:
    case 24:
      return <i class="fas fa-tint" style={{fontSize:"20px"}}></i>; // Freezing rain, Possible freezing rain
    case 25:
      return <i class="fas fa-cloud-showers-heavy" style={{fontSize:"20px"}}></i>; // Hail
    case 26:
      return <i class="fas fa-moon" style={{fontSize:"20px"}}></i>; // Clear (night)
    case 27:
      return <i class="fas fa-cloud-moon" style={{fontSize:"20px"}}></i>; // Mostly clear (night)
    case 28:
      return <i class="fas fa-cloud-moon" style={{fontSize:"20px"}}></i>; // Partly clear (night)
    case 29:
      return <i class="fas fa-cloud" style={{fontSize:"20px"}}></i>; // Mostly cloudy (night)
    case 30:
      return <i class="fas fa-cloud" style={{fontSize:"20px"}}></i>; // Cloudy (night)
    case 31:
      return <i class="fas fa-cloud" style={{fontSize:"20px"}}></i>; // Overcast with low clouds (night)
    case 36:
      return <i class="fas fa-cloud-showers-heavy" style={{fontSize:"20px"}}></i>; // Possible freezing rain (night)
    default:
      return <i class="fas fa-question" style={{fontSize:"20px"}}></i>; // Default icon for unknown weather codes
  }
}

function getWeatherimg(weatherCode) {
  switch (weatherCode) {
    case 2:
      return <i class="fas fa-sun" style={{fontSize:"100px",}}></i>; // Sunny
    case 3:
      return <i class="fas fa-cloud-sun" style={{fontSize:"100px"}}></i>; // Mostly sunny
    case 4:
      return <i class="fas fa-cloud-sun" style={{fontSize:"100px"}}></i>; // Partly sunny
    case 5:
      return <i class="fas fa-cloud" style={{fontSize:"100px"}}></i>; // Mostly cloudy
    case 6:
      return <i class="fas fa-cloud" style={{fontSize:"100px"}}></i>; // Cloudy
    case 7:
      return <i class="fas fa-cloud" style={{fontSize:"100px"}}></i>; // Overcast
    case 8:
      return <i class="fas fa-cloud" style={{fontSize:"100px"}}></i>; // Overcast with low clouds
    case 9:
      return <i class="fas fa-smog" style={{fontSize:"100px"}}></i>; // Fog
    case 10:
    case 11:
    case 12:
    case 32:
      return <i class="fas fa-cloud-rain" style={{fontSize:"100px"}}></i>; // Light rain, Rain, Possible rain, Rain shower
    case 13:
      return <i class="fas fa-poo-storm" style={{fontSize:"100px"}}></i>; // Rain shower
    case 14:
    case 33:
      return <i class="fas fa-bolt" style={{fontSize:"100px"}}></i>; // Thunderstorm, Local thunderstorms
    case 15:
      return <i class="fas fa-bolt" style={{fontSize:"100px"}}></i>; // Local thunderstorms
    case 16:
    case 17:
    case 18:
    case 34:
      return <i class="fas fa-snowflake" style={{fontSize:"100px"}}></i>; // Light snow, Snow, Possible snow, Snow shower
    case 19:
    case 35:
      return <i class="fas fa-cloud-meatball" style={{fontSize:"100px"}}></i>; // Snow shower, Rain and snow
    case 20:
    case 21:
    case 22:
      return <i class="fas fa-cloud-meatball" style={{fontSize:"100px"}}></i>; // Rain and snow
    case 23:
    case 24:
      return <i class="fas fa-tint" style={{fontSize:"100px"}}></i>; // Freezing rain, Possible freezing rain
    case 25:
      return <i class="fas fa-cloud-showers-heavy" style={{fontSize:"100px"}}></i>; // Hail
    case 26:
      return <i class="fas fa-moon" style={{fontSize:"100px"}}></i>; // Clear (night)
    case 27:
      return <i class="fas fa-cloud-moon" style={{fontSize:"100px"}}></i>; // Mostly clear (night)
    case 28:
      return <i class="fas fa-cloud-moon" style={{fontSize:"100px"}}></i>; // Partly clear (night)
    case 29:
      return <i class="fas fa-cloud" style={{fontSize:"100px"}}></i>; // Mostly cloudy (night)
    case 30:
      return <i class="fas fa-cloud" style={{fontSize:"100px"}}></i>; // Cloudy (night)
    case 31:
      return <i class="fas fa-cloud" style={{fontSize:"100px"}}></i>; // Overcast with low clouds (night)
    case 36:
      return <i class="fas fa-cloud-showers-heavy" style={{fontSize:"100px"}}></i>; // Possible freezing rain (night)
    default:
      return <i class="fas fa-question" style={{fontSize:"100px"}}></i>; // Default icon for unknown weather codes
  }
}


const Weather=()=>
{
  const [weather_hourly,setweather_hourly]=useState({});
  const [weather_current,setweather_current]=useState({});
  const [weather_daily,setweather_daily]=useState({});

  const getweekday=(dateString)=>
  {
    const date = new Date(dateString);
    const dayOfWeek = date.toLocaleDateString('en-IN', { weekday: 'long' });
    return dayOfWeek;
  }

  useEffect(()=>
  {
    const fetchweather_current=async ()=>
    {
  
      try{
        const API_URL = 'https://ai-weather-by-meteosource.p.rapidapi.com/current?place_id=pune&timezone=auto&language=en&units=auto';
        const response=await axios.get(API_URL,
          {
            headers: {
              'X-RapidAPI-Key': API_KEY,
              'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com',
            },
          });
 
        setweather_current(response.data);
      }
      catch(error){
     console.log(error);
      }
    };
    const fetchweather_hourly=async ()=>
    {
     
      try{
        const API_URL = 'https://ai-weather-by-meteosource.p.rapidapi.com/hourly?place_id=pune&timezone=auto&language=en&units=auto';
        const response=await axios.get(API_URL,
          {
            headers: {
              'X-RapidAPI-Key': API_KEY,
              'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com',
            },
          });
    
        setweather_hourly(response.data);
      }
      catch(error){
     console.log(error);
      }
    }
    const fetchweather_daily=async ()=>
    {
     
      try{
        const API_URL = 'https://ai-weather-by-meteosource.p.rapidapi.com/daily?place_id=pune&timezone=auto&language=en&units=auto';
        const response=await axios.get(API_URL,
          {
            headers: {
              'X-RapidAPI-Key': API_KEY,
              'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com',
            },
          });
    
        setweather_daily(response.data);
      }
      catch(error){
     console.log(error);
      }
    }
    fetchweather_hourly();
    fetchweather_current();
    fetchweather_daily();
  },[])
  const hourly_arr=weather_hourly?.hourly?.data;
  const daily_arr=weather_daily?.daily?.data;
  const temp=weather_current?.current?.temperature;
  const weather_img=weather_current?.current?.icon_num;
  const Humidity=weather_current?.current?.humidity;
  const pressure=weather_current?.current?.pressure;
  const summary=weather_current?.current?.summary;
  console.log(pressure,Humidity,weather_img);
  return(
  <div>
          
  <section style={{ backgroundColor: "#C1CFEA",height:"575px" }}>
    <MDBContainer className="h-100">
      <MDBRow
        className="justify-content-center align-items-center h-100 d-flex"
        style={{ color: "#282828" }}
      >
        <MDBCard
          className="mb-4 gradient-custom"
          style={{ borderRadius: "25px" }}
        >

          <MDBCardBody className="p-4">
                <div className="d-flex justify-content-between pb-2" style={{marginLeft:'105px'}}>
                  <div>
                    <p className="h2 mb-1">Pune</p>
                    {summary && (
  <p className="mb-1 text-muted mb-0">{summary}</p>
)}                 {temp && 
                    (<h2 className="display-2">
                      <strong>{temp} °C</strong>
                    </h2>)
}
                    {pressure && (
  <span className="text-muted mb-0">Pressure:{pressure} hPa</span>
)}
                    <span className="mx-2">|</span>
                    {Humidity && (
  <span className="text-muted mb-0">Hummidity:{Humidity}%</span>
)}
                    
                    
                  </div>
                  <div>
                  <span class="weather-icon">{getWeatherimg(weather_img)}</span>
                  </div>
                </div>
               

                <div className="d-flex justify-content-around text-center pb-3 pt-2">
                   
                {
                      hourly_arr && hourly_arr.slice(0,5).map((object,index)=>(

  
          <div className="flex-column">
            
                    <p className="small">
                      <strong>{object.temperature}°C</strong>
                    </p>
                    <span class="weather-icon">{getWeatherIcon(object.icon)}</span>
                    <p className="mb-0">
                      <strong>{object.date.split("T")[1].slice(0,5)}</strong>
                    </p>
          </div>
                   ))
               } 
                  
        </div>

        <div className="d-flex justify-content-around text-center pb-3 pt-2">
        {
                      daily_arr && daily_arr.slice(1,6).map((object,index)=>(

  
          <div className="flex-column">
            
                    <p className="small">
                      <strong>{object.temperature}°C</strong>
                    </p>
                    <span class="weather-icon">{getWeatherIcon(object.icon)}</span>
                    <p className="mb-0">
                      <strong>{getweekday(object.day)}</strong>
                    </p>
          </div>
                   ))
               } 
                  
        </div>
          </MDBCardBody>
        </MDBCard>

        
        
       
      </MDBRow>
    </MDBContainer>
  </section>
      </div>
  )
}
export default function Home() {

  const handleRedirect = (src) => {
    
    window.location.href = src;
  };

  const [Object,setobject]=useState({});

  useEffect(()=>
  {
    const fetchnews=async ()=>
    {
      const response=await axios.get('https://backend-portal.onrender.com/farmer/scrape')
      setobject(response.data);
    }
    fetchnews();
  },[])
  
  const news=Object?.news;
  if(news)
  {
    return (
    <div>
    <Navbar />
    <Weather />
    <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-black' style={{marginTop:"30px"}}>
              <h1 className='mb-3' style={{textDecoration: 'underline 5px red' }}>News Archives</h1>
            </div>
    </div>
    <div>
    {
    news.map((object,index)=>(
    <MDBContainer className="py-5" style={{ marginLeft: '20%' }}>
      <MDBRow className="gx-5">
        <MDBCol md="6" className="mb-4" style={{ width: '200px' }}>
          <MDBRipple
            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
            rippleTag="div"
            rippleColor="light"
          >
            <img
              src={object.img_src}
              //className="w-100"
              style={{ width: '150px' ,height:'150px' }}
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>
        <MDBCol md="6" className="mb-4">
          <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
            News of the day
          </span>
          <h4>
            <strong>{object.title}</strong>
          </h4>
          <p className="text-muted">
          </p>
          <MDBBtn onClick={()=>handleRedirect(object.source)}>Read More</MDBBtn>
        </MDBCol>
      </MDBRow>
      <hr></hr>
    </MDBContainer>
    
  ))}
  </div>
  </div>)
}
}
