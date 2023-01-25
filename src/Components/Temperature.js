import React, {useState} from 'react';
import '../css/Temperature.css';

const Temperature = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");
  const increaseTemperature = () =>{
    if(temperatureValue === 25) return;
    const newTemperatureValue = temperatureValue + 1;
    if(newTemperatureValue >= 15)
      setTemperatureColor("hot");
    setTemperatureValue(newTemperatureValue);
  };
  const decreaseTemperature = () =>{
    if(temperatureValue === 0) return;
    const newTemperatureValue = temperatureValue - 1;
    if(newTemperatureValue < 15)
      setTemperatureColor("cold");
    setTemperatureValue(newTemperatureValue);
  };
   return(
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className='button-container'>
        <button className='button-setter' onClick={()=>increaseTemperature()}>+</button>
        <button className='button-setter' onClick={()=>decreaseTemperature()}>-</button>
      </div>
    </div>
  )
}
export default Temperature;