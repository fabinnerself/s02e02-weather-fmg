import { images } from '../images/indexFont1.js';

function getFontImage(descripcion) {
    let imageNameFont ="";

    switch (descripcion.toLowerCase()) {
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

      return imageNameFont;    
}

export default getFontImage;