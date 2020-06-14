import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = (props) => (
  <div>
    <span className="date">{`${props.date}`}</span>

    <span className="icon">{`${props.icon}`}</span>

    <span className="temperature">{`${props.temperature}`}</span>

    <span className="description">{`${props.description}`}</span>
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
