import React from "react";
import { CurrentForecastProps } from "../types/index";

const CurrentForecast: React.FC<CurrentForecastProps> = ({
  forecast,
  weatherDetails,
}) => {
  return (
    <div className='ui segment'>
      <div className='div-section'>
        <h3>Current Forecast</h3>
        <div className='city'>
          <div className='city-name'>{forecast.city_name}</div>
          <div className='city-temp'>
            {Math.round(forecast.temp)}
            <sup>°C</sup>
          </div>
          <figure>
            <img
              alt={weatherDetails.description}
              src={`/icons/${weatherDetails.icon}.png`}
            />
            <figcaption>{weatherDetails.description}</figcaption>
          </figure>
          <div>
            <p>Sun rise:{forecast.sunrise}</p>
            <p>Sun set:{forecast.sunset}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentForecast;
