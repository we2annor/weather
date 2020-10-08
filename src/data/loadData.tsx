import React from "react";
//import { Data } from "../types/index";
import PropTypes from "prop-types";

const LoadData = ({ data, weather, isLoading, error }) => {
  const getContent = () => {
    console.log("data from loadData", data, weather);
  };

  const getPageContent = () => {
    let pageContent = "";
    if (isLoading) {
      pageContent = "...loading! please wait";
    }

    if (error) {
      pageContent = `error occured loading this page. ${error}`;
    }

    if (!data) {
      pageContent = "no data found yet";
    } else {
      pageContent += (
        <div className='weather-info-container'>
          <div className='weather-info'>
            <h3 className='location'>{data.city_name}</h3>
            <p className='description'>{weather.description}</p>
            <img alt={"weather"} src={`/icons/${weather.icon}.png`} />
          </div>
          <div className='stat'>
            <p className='temperature'>{data.temp}</p>
            <div>
              <p>H:{data.temp}</p>
              <p>L:{data.dewpt}</p>
            </div>
          </div>
          {getContent()}
        </div>
      );
    }

    return pageContent;
  };

  return <div>{getPageContent()}</div>;
};

export default LoadData;

LoadData.propTypes = {
  data: PropTypes.shape({
    temp: PropTypes.string.isRequired,
    city_name: PropTypes.string.isRequired,
    dewpt: PropTypes.number.isRequired,
  }).isRequired,
  weather: PropTypes.shape({
    description: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};
