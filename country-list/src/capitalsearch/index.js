import { useState } from "react";

const CapitalSearchForm = (props) => {
  return (
    <form>
      <input
        name="capitalSearch"
        placeholder="Search Capital"
        value={props.capitalSearch}
        onChange={props.onCapitalSearchChange}
      />
    </form>
  );
};
export default CapitalSearchForm;
