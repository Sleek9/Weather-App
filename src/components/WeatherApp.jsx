// React
import React, { useEffect } from "react";

// React-Router
import { useHistory, useLocation } from "react-router-dom";

// Components
import SearchBar from "./SearchBar";
import WeatherDetails from "./WeatherDetails";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

// Custom Hook
import useFetchWeather from "../hooks/useFetchWeather";

// Styles
import "../App.css";
import { Helmet } from "react-helmet";

const WeatherApp = () => {
  const { setLocation, location, isLoading, error, response } =
    useFetchWeather();

  const history = useHistory();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const qSearch = query.get("q");

  const handleSearch = (searchValue) => {
    if (!searchValue) return;

    setLocation(searchValue);

    if (history.location.search !== `?q=${searchValue}`) {
      history.replace({ search: `?q=${searchValue}` });
    }
  };

  useEffect(() => {
    // get data from query
    if (qSearch) setLocation(qSearch);
  });

  return (
    <div className="App">
      <Helmet>
        <title>Weather App | {location ? location : ""}</title>
      </Helmet>
      <div className="header">
        <h2>Clima Hoy</h2>
        <i className="fas logo">&#xf6c4;</i>
      </div>
      <SearchBar handleSearch={handleSearch} location={location} />
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {response && <WeatherDetails response={response} />}
    </div>
  );
};

export default WeatherApp;
