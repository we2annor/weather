import React, { useState, useEffect } from "react";
import { KEY } from "../../apis/weatherio";
import CurrentForecast from "../CurrentForecast";
import axios from "axios";

const Home = () => {
  const [weatherDetails, setWeatherDetails] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API = `https://api.weatherbit.io/v2.0/current?city=London&country=UK&key=${KEY}`;

  useEffect(() => {
    axios
      .get(API)
      .then((result) => {
        setLoading(true);
        setCurrentData(result.data.data[0] || []);
        setWeatherDetails(result.data.data[0].weather || []);
      })
      .catch((reject) => {
        setLoading(true);
        setError(reject);
        setCurrentData([]);
        setWeatherDetails([]);
      });
  }, [API]);

  if (!loading) {
    return <div className='loading'>Loading...</div>;
  }

  if (error) {
    return <div className='error-message'>Sorry an error occured.</div>;
  }

  return (
    <CurrentForecast forecast={currentData} weatherDetails={weatherDetails} />
  );
};

export default Home;
