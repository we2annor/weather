import React, { useState, useEffect } from "react";
import { KEY } from "../../apis/weatherio";
import CurrentForecast from "../CurrentForecast";
import axios from "axios";

interface ResultItem {
  city_name: string;
  temp: number;
  sunrise: number;
  sunset: number;
}

const ResultItem = {
  city_name: "",
  temp: 0,
  sunrise: 0,
  sunset: 0,
};

interface WeatherResult {
  description: string;
  icon: string;
}

const WeatherResult = {
  description: "",
  icon: "",
};

//interface ResultItems extends Array<ResultItem> {}

const Home = () => {
  const [weatherResults, setWeatherResults] = useState<WeatherResult>(
    WeatherResult
  );
  const [results, setResults] = useState<ResultItem>(ResultItem);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API = `https://api.weatherbit.io/v2.0/current?city=London&country=UK&key=${KEY}`;

  useEffect(() => {
    axios
      .get(API)
      .then((result) => {
        setLoading(true);
        setResults(result.data.data[0]);
        setWeatherResults(result.data.data[0].weather);
      })
      .catch((reject) => {
        setLoading(true);
        setError(reject);
        setResults(ResultItem);
        setWeatherResults(WeatherResult);
      });
  }, [API]);

  if (!loading) {
    return <div className='loading'>Loading...</div>;
  }

  if (error) {
    return <div className='error-message'>Sorry an error occured.</div>;
  }

  return <CurrentForecast forecast={results} weatherDetails={weatherResults} />;
};

export default Home;
