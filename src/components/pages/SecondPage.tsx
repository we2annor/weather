import React, { useState } from "react";
import City from "../City";
import SearchField from "../SearchBar";

const SecondPage = () => {
  const baseUrl = "https://api.weatherbit.io/v2.0/forecast/daily?city=";
  const sydney = `${baseUrl}Sydney`;
  const newYork = `${baseUrl}New York`;
  const mumbai = `${baseUrl}Mumbai`;
  const london = `${baseUrl}London`;
  const tokyo = `${baseUrl}Tokyo`;
  const cities = [sydney, newYork, mumbai, london, tokyo];
  const [filter, setFilter] = useState({ minTemp: 0, maxTemp: 0 });

  const onFilterSubmit = (minTemp: number, maxTemp: number) => {
    setFilter({ minTemp, maxTemp });
  };

  const renderPageContent = () => {
    return cities.map((city, i) => (
      <City key={i} api={city} city_name={city.split("=")[1]} filter={filter} />
    ));
  };

  return (
    <div>
      <SearchField onFilterSubmit={onFilterSubmit} />
      {renderPageContent()}
    </div>
  );
};

export default SecondPage;
