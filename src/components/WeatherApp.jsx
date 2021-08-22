import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import "../App.css";
import SearchBar from "./SearchBar";
import WeatherDetails from "./WeatherDetails";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

const WeatherApp = () => {
  const [searchInput, setSearchInput] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);
  const [errorData, setErrorData] = useState("");
  const [loading, setLoading] = useState(false);

  let { search } = useLocation();
  let query = new URLSearchParams(search);

  let qSearch = query.get("q");
  let history = useHistory();

  const handleSearch = (searchValue) => {
    if (!qSearch) {
      setSearchInput(qSearch);
    } else {
      setSearchInput(searchValue);
    }
  };

  useEffect(() => {
    if (qSearch) {
      setSearchInput(qSearch);
    }
  }, []);

  useEffect(() => {
    if (!searchInput) return;

    const getData = async () => {
      setLoading(true);
      try {
        let res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&lang=es&units=metric&appid=32af7cce19ca153549abe935840d6753`
        );

        setResponse(res.data);
        setError(false);
        history.push({ search: `?q=${searchInput}` });
      } catch (error) {
        setErrorData(error.response);
        setError(true);

        setTimeout(() => {
          setError(false);
        }, 5000);
      }
    };
    getData();
    setLoading(false);
  }, [searchInput]);

  return (
    <div className="App">
      <div className="header">
        <h2>Clima Hoya</h2>
        <i className="fas logo">&#xf6c4;</i>
      </div>
      <SearchBar handleSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage error={errorData} />}
      {response && <WeatherDetails response={response} />}
    </div>
  );
};

export default WeatherApp;
