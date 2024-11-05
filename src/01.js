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


const fontImages = {
    "few clouds": fcloudsF,   
    "clear sky": clearF,
    "scattered clouds": scloudsF,
    "broken clouds": bcloudsF,
    "Clouds" :scloudsF,
    "shower rain": srainF,
    "rain": rainF,
    "thunderstorm": tstormF,
    "snow": snowF,
    "mist": mistF,
    "default": defaultF
  };

const searchCrite = "Clouds"

  const keysImg = Object.keys(fontImages);  

  const imageNameFont = keysImg.find(key => fontImages[key].includes(searchCrite));

  console.log("img ",imageNameFont)

