import React from "react";
import DailyForecast from "./DailyForecast";

const DailyForecastList = ({ dailyForecasts, filter }) => {
  const filteredDailyForecasts = dailyForecasts.filter((dailyForecast) => {
    if (filter.minTemp && filter.maxTemp) {
      return (
        dailyForecast.temp >= filter.minTemp &&
        dailyForecast.temp <= filter.maxTemp
      );
    } else if (filter.minTemp) {
      return dailyForecast.temp >= filter.minTemp;
    } else if (filter.maxTemp) {
      return dailyForecast.temp <= filter.maxTemp;
    }

    return true;
  });
  const renderedList = filteredDailyForecasts.map((dailyForecast, index) => {
    return (
      <li key={index} className='city'>
        <DailyForecast dailyForecast={dailyForecast} />
      </li>
    );
  });

  return <>{renderedList}</>;
};

export default DailyForecastList;
