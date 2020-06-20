import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./forecast-summary";

import "../styles/forecast-list.css";

const ForecastList = (props) => (
  <div className="forecast-list">
    {props.forecasts.map(
      ({ date, description, icon, temperature: { max } }) => (
        <ForecastSummary
          key={date}
          date={date}
          description={description}
          icon={icon}
          temperature={max}
          onSelect={props.onForecastSelect}
        />
      )
    )}
  </div>
);

ForecastList.propTypes = {
  forecasts: PropTypes.array.isRequired,
};

export default ForecastList;
