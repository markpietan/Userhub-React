import React from "react";

const Dropdown = ({ searchHistory, setText }) => {
  let searchHistoryArr;
  if (searchHistory !== null) {
    searchHistoryArr = JSON.parse(searchHistory);
  }
  return (
    <div>
      <select
        className="ui dropdown"
        onChange={(event) => {
            console.log(event.target.value)
          setText(event.target.value);
        }}
      >
          <option value= {''}></option>
        {searchHistoryArr.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
