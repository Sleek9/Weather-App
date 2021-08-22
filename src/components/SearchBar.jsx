import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ handleSearch }) => {
  const [search, setSearch] = useState(null);

  const handleChange = (e) => {
    if (e.target.value) {
      setSearch(e.target.value);
    }
  };

  const handleChangeSearch = (e) => {
    e.preventDefault();
    handleSearch(search);
  };

  return (
    <>
      <form onSubmit={handleChangeSearch} className="form">
        <input
          type="text"
          className="input"
          name="ciudad"
          id="ciudad"
          placeholder="Ingresa tu ciudad"
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
