import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./location-details";
import ForecastList from "./forecast-list";

import '../styles/app.css';

const App = (props) => (
  <div className="forecast">
    <LocationDetails
      city={props.location.city}
      country={props.location.country}
    />

    <ForecastList forecasts={props.forecasts} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,

  forecasts: PropTypes.array.isRequired,
};

export default App;
