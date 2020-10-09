import React from "react";

export interface Forecast {
  city_name: string;
  temp: number;
  sunrise: number;
  sunset: number;
}

export interface WeatherDetails {
  description: string;
  icon: string;
  code?: number;
}

interface Props {
  forecast?: Forecast;
  weatherDetails?: WeatherDetails;
}

const CurrentForecast: React.FC<Props> = ({ forecast, weatherDetails }) => {
  if (!forecast || !weatherDetails) return null;

  return (
    <div className='ui segment'>
      <div className='city-name'>{forecast.city_name}</div>
      <figure>
        <img
          alt={weatherDetails.description}
          src={`/icons/${weatherDetails.icon}.png`}
        />
        <figcaption>{weatherDetails.description}</figcaption>
      </figure>
      <div>
        <div>
          {Math.round(forecast.temp)}
          <sup>°C</sup>
        </div>
      </div>
      <div>
        <p>Sun rise:{forecast.sunrise}</p>
        <p>Sun set:{forecast.sunset}</p>
      </div>
    </div>
  );
};

export default CurrentForecast;
