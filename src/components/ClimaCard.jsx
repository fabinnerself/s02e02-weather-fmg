import React ,{useState} from 'react'
import './card.css'

function ClimaCard({ datosClima }) {

    const [isCelsius, setIsCelsius] = useState(true);

    const convertTemperature = (kelvin) => {
        if (isCelsius) {
            
            return (
                <span>
                    {(kelvin - 273.15).toFixed(0)}° <span className="afterTemp">C</span>
                </span>
            );
        }
        return (
            <span>
                {(kelvin).toFixed(0)}° <span className="afterTemp">K</span>
            </span>
        );        
    };      

return (
<>{datosClima ? (<div className="backgroundContainer">    
    <div id="weatherInfo">
        <div className="headerContainer">
            <h1>{datosClima?.name} - {datosClima.sys?.country}</h1>
    </div>                            
    <img 
        src={datosClima.srcLink}   
        alt="Weather icon" 
        className="weatherIcon" 
        id="weatherIcon"
    />
    <p className='valueMain'>"{datosClima?.weather[0].description}"</p>
    <div className="additionalConditions">
    <h3>CONDICIONES ADICIONALES</h3>
    <div className="conditionItem">
        <span className="conditionLabel">Viento:</span>
        <span className="conditionValue">{datosClima?.wind.speed} <span className="unit"> m/s</span></span>
    </div>
    <div className="conditionItem">
        <span className="conditionLabel">Nubosidad:</span>
        <span className="conditionValue">{datosClima?.clouds.all}<span className="unit" > %</span></span>
    </div>
    <div className="conditionItem">
        <span className="conditionLabel">Presión:</span>
        <span className="conditionValue">{datosClima?.main.pressure} <span className="unit"> hPA</span></span>
    </div>                       
</div>

    <p> <span className="temperature" id="temperature"> {convertTemperature(datosClima?.main.temp)} </span> </p> 
    <button  onClick={() => setIsCelsius(!isCelsius)} id="changeTemp">  Cambiar a {isCelsius ? '°Kelvin' : '°Celsius'} </button>       
</div>
</div> 

) : (<div>no se puedieron cargar los datos de la tarjeta</div>)}
 </>  
    
  )
}

export default ClimaCard