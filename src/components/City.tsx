import React, { useState, useEffect } from "react";
import { KEY } from "../apis/weatherio";
import axios from "axios";
import DailyForecastList from "./DailyForecastList";

interface Props {
  api: string;
  city_name: string;
  filter: {};
}

interface ResultItem {
  datetime: string;
  temp: number;
  weather: { description: string; icon: string };
  high_temp: number;
  low_temp: number;
}

interface ResultItems extends Array<ResultItem> {}

const City: React.FC<Props> = ({ api, city_name, filter }) => {
  const [results, setResults] = useState<ResultItems>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API = `${api}&key=${KEY}`;

  useEffect(() => {
    axios
      .get(API)
      .then((result) => {
        setLoading(true);
        setResults(result.data.data);
      })
      .catch((reject) => {
        setLoading(true);
        setError(reject);
        setResults([]);
      });
  }, [API]);

  if (!loading) {
    return <div className='loading'>Loading...</div>;
  }

  if (error) {
    return <div className='error-message'>Sorry an error occured.</div>;
  }

  console.log("Results", results);
  return (
    <div className='ui raised segment city-container'>
      <h3 className='ui header'>{city_name}</h3>
      <div className='div-section'>
        <div className='container'>
          <ul className='cities'>
            <DailyForecastList results={results} filter={filter} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default City;
