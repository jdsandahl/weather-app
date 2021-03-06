import React from "react";
import PropTypes from "prop-types";

import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = (props) => (
  <div className="forecast-summary">
    <div className="date" data-testid="date-id">
      <span>{moment(props.date).format('ddd Do MMM')}</span>
    </div>
    <div className="icon" data-testid="icon-id">
      <WeatherIcon name="owm" iconId={props.icon} />
    </div>
    <div className="temperature" data-testid="temperature-id">
      <span>{props.temperature}&deg;c</span>
    </div>
    <div className="description" data-testid="description-id">
      <span>{props.description}</span>
    </div>
    <button onClick={() => props.onSelect(props.date)}>More Details</button>
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
