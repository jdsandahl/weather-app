import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';

import "../styles/forecast-details.css";

const ForecastDetails = (props) => (
  <div className="forecast-details">
    <div className="date">
      <h3>{moment(props.forecasts.date).format('ddd Do MMM y')}</h3>
    </div>
    <div className="max-temperature">
      <span>Max Temperature: {props.forecasts.temperature.max}&deg;c</span>
    </div>
    <div className="min-temperature">
      <span>Min Temperature: {props.forecasts.temperature.min}&deg;c</span>
    </div>
    <div className="humidity">
      <span>Humidity: {props.forecasts.humidity}%</span>
    </div>
    <div className="wind-speed">
      <span>Wind: {props.forecasts.wind.speed}mph {props.forecasts.wind.direction}</span>
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
