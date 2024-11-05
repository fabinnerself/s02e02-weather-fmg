import { images } from './assets/images/indexFont1.js';

const searchCrite = "few clouds";

 let imageNameFont ="";

switch (searchCrite.toLowerCase()) {
    case 'clear sky':
      imageNameFont = images.clear;
      break;
    case 'few clouds':
      imageNameFont = images.fewClouds;
      break;
    case 'scattered clouds':
      imageNameFont = images.scatteredClouds;
      break;
    case 'clouds':
        imageNameFont = images.fewClouds;
        break;      
    case 'broken clouds':
        imageNameFont = images.brokenClouds;
        break;
    case 'shower rain':
        imageNameFont = images.showerRain;
        break;
    case 'rain':
        imageNameFont = images.rain;
        break;
    case 'thunderstorm':
        imageNameFont = images.thunderstorm;
        break;
    case 'snow':
        imageNameFont = images.snow;
        break;
    case 'mist':
        imageNameFont = images.mist;
        break;        
    default:
      imageNameFont = images.default;
      break;
  }
  
  console.log("img ", imageNameFont);
 

