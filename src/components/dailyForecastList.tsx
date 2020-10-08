import React from "react";
import DailyForecast from "./dailyForecast";

interface Props {
  dailyForecasts: DailyForecasts;
}

interface DailyForecasts {
  map: Function;
  dailyForecast: [];
  index: number;
}

interface DailyForecast {}

const DailyForecastList: React.FC<Props> = ({ dailyForecasts }) => {
  const renderedList = dailyForecasts.map((dailyForecast, index) => {
    return (
      <li key={index} className='day'>
        <DailyForecast dailyForecast={dailyForecast} />
      </li>
    );
  });

  return <div>{renderedList}</div>;
};

export default DailyForecastList;
