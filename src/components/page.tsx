import React, { useState, useEffect } from "react";
import { KEY } from "../apis/weatherio";
import axios from "axios";
import DailyForecastList from "./dailyForecastList";

interface Props {
  api: string;
  city_name: string;
}

const Page: React.FC<Props> = ({ api, city_name }) => {
  const [currentData, setCurrentData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const API = `${api}&key=${KEY}`;

  useEffect(() => {
    axios
      .get(API)
      .then((result) => {
        setLoaded(true);
        setCurrentData(result.data.data || []);
      })
      .catch((reject) => {
        setLoaded(true);
        setError(reject);
        setCurrentData([]);
      });
  }, [API]);

  const renderContent = () => {
    if (loaded) {
      return (
        <div className='ui raised segment city-container'>
          <h3 className='ui header'>{city_name}</h3>
          <div className='ajax-section'>
            <div className='container'>
              <ul className='days'>
                <DailyForecastList dailyForecasts={currentData} />;
              </ul>
            </div>
          </div>
        </div>
      );
    }
    if (error) {
      return `sorry error occured ${error}`;
    }
  };
  return <>{renderContent()}</>;
};

export default Page;
