import React from "react";
import { DailyForecastProps } from "../types/index";

const DailyForecast: React.FC<DailyForecastProps> = ({ dailyForecast }) => {
  return (
    <div className='forecast'>
      <small>
        <span className='date'>Date:</span>
        {dailyForecast.datetime}
      </small>
      <div>
        <div className='city-temp'>
          {Math.round(dailyForecast.temp)}
          <sup>°C</sup>
        </div>
        <figure>
          <img
            alt={dailyForecast.weather.description}
            src={`/icons/${dailyForecast.weather.icon}.png`}
          />
          <figcaption>{dailyForecast.weather.description}</figcaption>
        </figure>
      </div>
      <p>H:{dailyForecast.high_temp}</p>
      <p>L:{dailyForecast.low_temp}</p>
    </div>
  );
};
export default DailyForecast;
