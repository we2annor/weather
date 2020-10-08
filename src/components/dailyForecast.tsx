import React from "react";

interface DailyForecast {
  weather: Weather;
  high_temp: number;
  low_temp: number;
  datetime: Date;
  temp: number;
}

interface Weather {
  description: string;
  icon: string;
}
interface Props {
  dailyForecast: DailyForecast;
}

const DailyForecast: React.FC<Props> = ({ dailyForecast }) => {
  return (
    <div className='forecast'>
      <div>
        {Math.round(dailyForecast.temp)}
        <sup>°C</sup>
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
      Date: {dailyForecast.datetime} {dailyForecast.weather.description}
    </div>
  );
};

export default DailyForecast;
