import React from "react";
import PropTypes from "prop-types";

import moment from 'moment';

const ForecastDetails = (props) => (
  <div className="forecast-details">
    <div className="date">
      <span>{moment(props.forecasts.date).format('ddd Do MMM y')}</span>
    </div>
    <div className="max-temperature">
      <span>{props.forecasts.temperature.max}</span>
    </div>
    <div className="min-temperature">
      <span>{props.forecasts.temperature.min}</span>
    </div>
    <div className="humidity">
      <span>{props.forecasts.humidity}</span>
    </div>
    <div className="wind-speed">
      <span>{props.forecasts.wind.speed}</span>
    </div>
  </div>
);

ForecastDetails.propTypes = {
  forecasts: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.object.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.object.isRequired,
  }),
};

export default ForecastDetails;
