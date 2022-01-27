import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import getCurrentLocation from "../utils/getCurrentLocation";
import { useHistory } from "react-router-dom";

export default function useFetchWeather() {
  const [location, setLocation] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const getData = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=es&units=metric&appid=32af7cce19ca153549abe935840d6753`
      );
      history.replace({ search: `?q=${location}` });
      setResponse(res.data);
    } catch (e) {
      setError(e.response);
      setResponse(null);
    } finally {
      setIsLoading(false);
    }
  }, [location, history]);

  useEffect(() => {
    // if no query get current location
    if (!history.location.search)
      getCurrentLocation().then((location) => setLocation(location));
  });

  useEffect(() => {
    if (!location) return;

    getData();
  }, [location, getData]);

  return { response, error, isLoading, setLocation, location };
}
