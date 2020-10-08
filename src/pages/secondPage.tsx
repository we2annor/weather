import React from "react";
import Page from "../components/page";
import SearchBar from "../components/searchBar";

const SecondPage = () => {
  const baseUrl = "https://api.weatherbit.io/v2.0/forecast/daily?city=";
  const sydney = `${baseUrl}Sydney`;
  const mumbai = `${baseUrl}Mumbai`;
  const london = `${baseUrl}London`;
  const tokyo = `${baseUrl}Tokyo`;
  const cities = [sydney, mumbai, london, tokyo];

  const onTermSubmit = (minTemp: number, maxTemp: number) => {
    //cities.map((city)=>));
  };

  const renderPageContent = () => {
    return cities.map((city, i) => (
      <Page key={i} api={city} city_name={city.split("=")[1]} />
    ));
  };

  return (
    <div>
      <SearchBar onTermSubmit={onTermSubmit} />
      {renderPageContent()}
    </div>
  );
};

export default SecondPage;
