import React, {useState} from "react";
import PropTypes from "prop-types";
import LocationDetails from "./location-details";
import ForecastList from "./forecast-list";

import "../styles/app.css";
import ForecastDetails from "./forecast-details";

const App = props => {
  const [selectedDate, setSelectedDate] = useState(props.forecasts[0].date);

  const selectedForecast = props.forecasts.find(forecast => forecast.date === selectedDate);
  
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="forecast">
      <LocationDetails
        city={props.location.city}
        country={props.location.country}
      />
      <ForecastList forecasts={props.forecasts} onForecastSelect={handleForecastSelect} />
      <ForecastDetails forecasts={selectedForecast} />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,

  forecasts: PropTypes.array.isRequired,
};

export default App;
