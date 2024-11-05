function getFontImage(descripcion) {
    let imageNameFont ="";

    switch (descripcion.toLowerCase()) {
        case 'clear sky':
          imageNameFont = clearF;
          break;
        case 'few clouds':
          imageNameFont = fcloudsF;
          break;
        case 'scattered clouds':
          imageNameFont = scloudsF;
          break;
        case 'clouds':
            imageNameFont = "fcloudsF";
            break;      
        case 'broken clouds':
            imageNameFont = bcloudsF;
            break;
        case 'shower rain':
            imageNameFont = srainF;
            break;
        case 'rain':
            imageNameFont = rainF;
            break;
        case 'thunderstorm':
            imageNameFont = tstormF;
            break;
        case 'snow':
            imageNameFont = snowF;
            break;
        case 'mist':
            imageNameFont = mistF;
            break;        
        default:
          imageNameFont = defaultF;
          break;
      }

      return imageNameFont;    
}

export default getFontImage;