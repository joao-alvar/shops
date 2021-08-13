import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  return (
    <form className="searchForm" action="search/">
      <input
        type="search"
        placeholder="pesquisar por produtos"
        className="search__bar"
        name="q"
        required
      ></input>
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
