import React, { useState } from "react";

// Styles
import "./SearchBar.css";

const SearchBar = ({ handleSearch, location }) => {
  const [search, setSearch] = useState(null);

  const handleChange = (e) => setSearch(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) handleSearch(null);
    handleSearch(search);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="input"
          name="ciudad"
          id="ciudad"
          placeholder="Ingresa tu ciudad o país"
          defaultValue={location}
          onChange={handleChange}
          autoComplete="off"
        ></input>
        <button type="submit" className="button">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </>
  );
};

export default SearchBar;
