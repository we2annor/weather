import React from "react";
import DailyForecast from "./DailyForecast";
import { DailyForecastListProps } from "../types/index";

const DailyForecastList: React.FC<DailyForecastListProps> = ({
  results,
  filter,
}) => {
  const filteredDailyForecasts = results.filter((result) => {
    if (filter.minTemp && filter.maxTemp) {
      return result.temp >= filter.minTemp && result.temp <= filter.maxTemp;
    } else if (filter.minTemp) {
      return result.temp >= filter.minTemp;
    } else if (filter.maxTemp) {
      return result.temp <= filter.maxTemp;
    }

    return true;
  });

  const renderedList = filteredDailyForecasts.map((results, index) => {
    return (
      <li key={index} className='city'>
        <DailyForecast dailyForecast={results} />
      </li>
    );
  });

  return <>{renderedList}</>;
};
export default DailyForecastList;
