import React, {useState, useEffect } from "react";
import Axios from 'axios';
import LocationDetails from "./location-details";
import ForecastList from "./forecast-list";

import "../styles/app.css";
import ForecastDetails from "./forecast-details";

const App = props => {
  const [selectedDate, setSelectedDate] = useState(0);
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({city: '', country: '',});

  useEffect(() => {
    Axios.get('https://mcr-codes-weather.herokuapp.com/forecast')
    .then((response) => {
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    });
  }, []);


  const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);
  
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="forecast">
      <LocationDetails
        city={location.city}
        country={location.country}
      />
      <ForecastList forecasts={forecasts} onForecastSelect={handleForecastSelect} />
      {
        selectedForecast && (<ForecastDetails forecasts={selectedForecast} />)
      }
    </div>
  );
}


export default App;
