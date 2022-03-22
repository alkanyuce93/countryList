import { useState } from "react";

const SearchForm = (props) => {
  return (
    <form>
      <input
        name="search"
        placeholder="Search Countries"
        value={props.search}
        onChange={props.onSearchChange}
      />
    </form>
  );
};
export default SearchForm;
