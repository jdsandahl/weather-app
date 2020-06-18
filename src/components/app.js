import React, { useState, useEffect } from "react";
import Axios from "axios";
import LocationDetails from "./location-details";
import ForecastList from "./forecast-list";

import "../styles/app.css";
import ForecastDetails from "./forecast-details";
import SearchForm from "./search-form";

const App = (props) => {
  const [selectedDate, setSelectedDate] = useState(0);
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    Axios.get("https://mcr-codes-weather.herokuapp.com/forecast").then(
      (response) => {
        setForecasts(response.data.forecasts);
        setLocation(response.data.location);
        setLoading(false);
      }
    );
  }, []);

  const handleCitySearch = (city) => {
    const request = city.toLowerCase();

    setLoading(true);
    setError(null);

    Axios.get(
      `https://mcr-codes-weather.herokuapp.com/forecast?city=${request}`
    )
      .then((response) => {
        setForecasts(response.data.forecasts);
        setLocation(response.data.location);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response) {
          setLoading(false);
          setError(`${err.message}: The city entered was not found`);
        } else {
          setLoading(false);
          setError(err.message);
        }
      });
  };

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  if (loading && !error) {
    return (
      <div className="forecast">
        <h1 className="appLoading">Loading the weather...</h1>
      </div>
    );
  } else {
    return (
      <div className="forecast">
        {error && (
          <>
            <h2 className="error-message">`{error}`</h2>
            <SearchForm onCitySearch={handleCitySearch} />
          </>
        )}

        {!loading && !error && (
          <>
            <LocationDetails city={location.city} country={location.country} />
            
            <SearchForm onCitySearch={handleCitySearch} />
            
            <ForecastList
              forecasts={forecasts}
              onForecastSelect={handleForecastSelect}
            />

            {selectedForecast && (
              <ForecastDetails forecasts={selectedForecast} />
            )}
          </>
        )}
      </div>
    );
  }
};

export default App;
