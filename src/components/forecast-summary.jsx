import React from "react";
import PropTypes from "prop-types";

import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = ({ date, icon, temperature, description, onSelect }) => (
  <div className="forecast-summary">
    <div className="date" data-testid="date-id">
      <span>{moment(date).format('ddd Do MMM')}</span>
    </div>
    <div className="icon" data-testid="icon-id">
      <WeatherIcon name="owm" iconId={icon} />
    </div>
    <div className="temperature" data-testid="temperature-id">
      <span>{temperature}&deg;c</span>
    </div>
    <div className="description" data-testid="description-id">
      <span>{description}</span>
    </div>
    <button onClick={() => onSelect(date)}>More Details</button>
  </div>
);


ForecastSummary.propTypes = {
  forecasts: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }),
};

export default ForecastSummary;
