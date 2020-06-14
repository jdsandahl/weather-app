import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = (props) => (
  <div>
    <div className="date">
      <span className="date">{`${props.date}`}</span>
    </div>
    <div className="icon">
      <span className="icon">{`${props.icon}`}</span>
    </div>
    <div className="temperature">
      <span className="temperature">{`${props.temperature}°C`}</span>
    </div>
    <div className="description">
      <span className="description">{`${props.description}`}</span>
    </div>
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
