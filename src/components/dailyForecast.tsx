import React from "react";

interface Props {
  dailyForecast: {
    datetime: string;
    temp: number;
    weather: { description: string; icon: string };
    high_temp: number;
    low_temp: number;
  };
}

interface ResultItem {
  temp: string;
}
const DailyForecast: React.FC<Props> = ({ dailyForecast }) => {
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
      <p>H:{dailyForecast.low_temp}</p>
    </div>
  );
};

export default DailyForecast;
