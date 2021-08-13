import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  const [setSearch] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="searchForm" action="search/">
      <input
        type="search"
        placeholder="pesquisar por produtos"
        className="search__bar"
        autocomplete="off"
        maxLength="150"
        name="search"
        required
        handleChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="search__bar__btn">
        <SearchIcon
          style={{ fontSize: 20, cursor: "pointer" }}
          className="search__bar__btn__icon"
        />
      </button>
    </form>
  );
};

export default SearchBar;
