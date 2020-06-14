import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = (props) => (
  <div className="forecast-summary">
    <div>
      <span className="date">{props.date}</span>
    </div>
    <div>
      <span className="icon">{props.icon}</span>
    </div>
    <div>
      <span className="temperature">{props.temperature}&deg;C</span>
    </div>
    <div>
      <span className="description">{props.description}</span>
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
