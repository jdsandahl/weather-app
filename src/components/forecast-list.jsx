import React from "react";
import PropTypes from 'prop-types';
import ForecastSummary from "./forecast-summary";

import '../styles/forecast-list.css';

const ForecastList = (props) => (
  <div className="forecast-list">
    {props.forecasts.map((forecast) => (
      <ForecastSummary
        key={forecast.date}
        date={forecast.date}
        description={forecast.description}
        icon={forecast.icon}
        temperature={forecast.temperature.max}
        onSelect={props.onForecastSelect}
      />
    ))}
  </div>
);

ForecastList.propTypes = {
  forecasts: PropTypes.array.isRequired,
};

export default ForecastList;
