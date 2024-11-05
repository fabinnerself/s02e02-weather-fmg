import React ,{useState} from 'react'
import './card.css'

function ClimaCard1({ datosClima }) {

    const [isCelsius, setIsCelsius] = useState(false);

    const convertTemperature = (fahren) => {
        if (isCelsius) {
            return (
                <span>
                    { parseInt((fahren * 9 / 5) + 32)}° <span className="afterTemp">F</span>
                </span>
            );            
        }
        return (                
            <span>
                { fahren ?  ((fahren).toFixed(0)) : (0) }° <span className="afterTemp">C</span>
            </span> 
        );

    };      
  
return (
<>{datosClima ? (<div className="backgroundContainer">    
    <div className="weatherInfo">
        <div className="headerContainer">
            <h1>{datosClima?.city} - {datosClima?.country}</h1>
    </div> 
        <div className='card__fila'>
            <div><img 
                src={datosClima?.icon}   
                alt="Weather icon" 
                className="weatherIcon" 
                id="weatherIcon"                
            /></div> 
            <div><p className='valueMain'>"{datosClima?.main}"</p></div>
        </div>                           
    
    
    <div className="additionalConditions">
        <h3>ADITIONAL CONDITIONS </h3>
        <div className="conditionItem">
            <span className="conditionLabel">Wind:</span>
            {datosClima?.wind}   m/s 
        </div>
        <div className="conditionItem">
            <span className="conditionLabel">Cloud:</span>
            {datosClima?.clouds}  % 
        </div>
        <div className="conditionItem">
            <span className="conditionLabel">Pression:</span>
             {datosClima?.pressure}   hPA  
        </div>                       
    </div>

    <p> <span className="temperature" id="temperature"> {convertTemperature(datosClima?.temperature)} </span> </p> 
    <button  onClick={() => setIsCelsius(!isCelsius)} id="changeTemp">  Change to {!isCelsius ? '°Fahrenheit' : '°Celsius'} </button>       
</div>
</div> 

) : (<div>no se puedieron cargar los datos de la tarjeta- </div>)}
 </>  
    
  )
}

export default ClimaCard1