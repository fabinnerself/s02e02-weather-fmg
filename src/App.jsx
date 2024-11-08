import BuscadorClima from './components/BuscadorClima'
import ClimaCard from './components/ClimaCard'
import { useState , useEffect} from 'react'
import axios from 'axios';
import './app.css'

import {
  thunderstormSvg,
  drizzleSvg,
  rainSvg,
  snowSvg,
  atmosphereSvg,
  clearSvg,
  cloudSvg
} from './assets/images';

import {
  fcloudsF,
  clearF,
  scloudsF,
  bcloudsF,
  srainF,
  rainF,
  tstormF,
  snowF,
  mistF,
  defaultF
} from './assets/images/indexFont.js';


const weatherImageMap = {
  'clear': clearF,
  'clear sky': clearF,
  'few clouds': fcloudsF,
  'clouds': fcloudsF,
  'scattered clouds': scloudsF,
  'broken clouds': bcloudsF,
  'shower rain': srainF,
  'rain': rainF,
  'thunderstorm': tstormF,
  'snow': snowF,
  'mist': mistF,
  'default': defaultF
};



const key = '5f8142e5c82e1f550bb530edc710a652';
const url = 'https://api.openweathermap.org/data/2.5/weather';



const initialState = {
  latitude: 0,
  longitude: 0
};

const conditionCodes = {
  thunderstorm: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232],
  drizzle: [300, 301, 302, 310, 311, 312, 313, 314, 321],
  rain: [500, 501, 502, 503, 504, 511, 520, 521, 522, 531],
  snow: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622],
  atmosphere: [701, 711, 721, 731, 741, 751, 761, 762, 771, 781],
  clear: [800],
  clouds: [801, 802, 803, 804]
};

const icons = {
  thunderstorm: thunderstormSvg,
  drizzle: drizzleSvg,
  rain: rainSvg,
  snow: snowSvg,
  atmosphere: atmosphereSvg,
  clear: clearSvg,
  clouds: cloudSvg
};
 


function App() {  


  const [formValue, setFormValue] = useState("");
  const [search, setSearch] = useState("La Paz, Bolivia");
  const [fontImage, setFontImage] = useState(fcloudsF);  

  const [coords, setCoords] = useState(initialState);
  const [weather, setWeather] = useState({});  

  function changeImageWeather(weatherDesc) {
    console.log("int ")
    
    const imageName = weatherImageMap[weatherDesc.toLowerCase()] || weatherImageMap['default'];
    
    console.log("imagename ", imageName)
    setFontImage(imageName)
     
  }


  const handleSearch = () => {    
    
    if(formValue){
      console.log("Search term:", formValue);
    
      URL = `https://api.openweathermap.org/data/2.5/weather?q=${formValue}&appid=5f8142e5c82e1f550bb530edc710a652`

      console.log("URL ",URL)
      fetch(URL)
      .then(res => res.json())
      .then(data => {        
        
        console.log("data ",data)

        const keys = Object.keys(conditionCodes);
        const iconName = keys.find(key => conditionCodes[key].includes(data?.weather[0]?.id));

        changeImageWeather(data?.weather[0]?.main)

        setWeather({
          city: data?.name.toUpperCase(),
          country: data?.sys?.country,
          icon: icons[iconName],
          main: data?.weather[0]?.main.toUpperCase(),
          wind: data?.wind?.speed,
          clouds: data?.clouds?.all,
          pressure: data?.main?.pressure,
          temperature: parseInt(data?.main?.temp - 273.15)
        })
      })
      .catch()
    }
    else{
      console.log("NO data ")
    }

  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if(formValue)
        setSearch(formValue)
      else
        setSearch('La Paz, Bolivia')
      
    }
  };

  const handleChange = (e) =>{
    setFormValue(e.target.value)
  }

  useEffect(() => {
    console.log("nav ",navigator.geolocation)
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
     
      setCoords({ latitude, longitude });
    }, (error) => {
      console.log('No aceptaste la ubicación');
    })
     
  }, []);

 

  useEffect(() => {
    if (coords) {
      console.log(coords)
      const url_temp  = `${url}?lat=${coords.latitude}&lon=${coords.longitude}&appid=${key}`
      console.log(url_temp)
      axios.get(url_temp)
        .then(res => {
          const keys = Object.keys(conditionCodes);          

          console.log("forecast ",res.data?.weather[0]?.main)
          
          const iconName = keys.find(key => conditionCodes[key].includes(res.data?.weather[0]?.id));
         
  
          setWeather({
            city: res.data?.name.toUpperCase(),
            country: res.data?.sys?.country,
            icon: icons[iconName],
            main: res.data?.weather[0]?.main.toUpperCase(),
            wind: res.data?.wind?.speed,
            clouds: res.data?.clouds?.all,
            pressure: res.data?.main?.pressure,
            temperature: parseInt(res.data?.main?.temp - 273.15)
          });

          changeImageWeather(res.data?.weather[0]?.main)
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [coords]);


  useEffect(() =>{
    if(formValue)
      handleSearch()      
  },[search]) 

  
 
  return (
     < >
      <div className='wrapper'  style={{ backgroundImage: `url('${fontImage}')`}} >
      <div className='container'   >        
        <BuscadorClima formValue={formValue}  handleKeyDown={handleKeyDown} handleSearch={handleSearch} handleChange={handleChange}   />
        <ClimaCard datosClima={weather} />            
        </div>      
    </div>      
     </>
  )
}

export default App
