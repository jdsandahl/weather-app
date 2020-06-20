import React, { useState } from "react";
import PropTypes from "prop-types";

import "../styles/search-form.css";

const SearchForm = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="search-form">
      <div className="search-instruction">
        <p className="">Check a different city:</p>
      </div>
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={() => props.onCitySearch(searchText)}>
        Search
      </button>
    </div>
  );
};

SearchForm.propTypes = {
  onCitySearch: PropTypes.func.isRequired,
};

export default SearchForm;
