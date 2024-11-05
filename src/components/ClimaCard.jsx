import React ,{useState} from 'react'
import './card.css'

function ClimaCard({ datosClima }) {

    const [isCelsius, setIsCelsius] = useState(false);

    const convertTemperature = (fahren) => {
        if (isCelsius) {
            return (
                <span>
                    { parseInt((fahren * 9 / 5) + 32)}° <span className="card__afterTemp">F</span>
                </span>
            );            
        }
        return (                
            <span>
                { fahren ?  ((fahren).toFixed(0)) : (0) }° <span className="card__afterTemp">C</span>                
            </span> 
        );
    };   

return (
<>{datosClima ? (
    <div className='card'>         
        <div className="card__headerContainer">
            <h1>{datosClima?.city} - {datosClima?.country}</h1>
        </div>                  
        <div className='card__row'>
            <div><img 
                src={datosClima?.icon}   
                alt="Weather icon" 
                className="card__weatherIcon"                             
            /></div> 
            <div><p className='card__main'>"{datosClima?.main}"</p></div>
        </div>          
            <div className="card__body">            
                <h3>ADITIONAL CONDITIONS </h3>
                <div className="card__conditionItem">
                    <span className="card__conditionLabel">Wind:</span>
                    {datosClima?.wind}   m/s 
                </div>
                <div className="card__conditionItem">
                    <span className="card__conditionLabel">Cloud:</span>
                    {datosClima?.clouds}  % 
                </div>
                <div className="card__conditionItem">
                    <span className="card__conditionLabel">Pression:</span>
                    {datosClima?.pressure}   hPA  
                </div>                   
            </div>    
    <p> <span className="card__temperature" > {convertTemperature(datosClima?.temperature)} </span> </p> 
    <button  className='card__button' onClick={() => setIsCelsius(!isCelsius)} id="changeTemp">  Change to {!isCelsius ? '°Fahrenheit' : '°Celsius'} </button>       
</div>
 

) : (<div>no se puedieron cargar los datos de la tarjeta- </div>)}
 </>  
    
  )
}

export default ClimaCard