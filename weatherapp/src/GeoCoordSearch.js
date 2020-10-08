import React from "react";
const GeoCoordSearch = () => {
  return (
    <section className= "ui container">
      <form class="ui form">
        <div class="field">
          <label htmlFor= "Geographic Coordinates Search">Geographic Coordinates Search</label>
          <input type="text" name="Geographic Coordinates" placeholder="Geographic Coordinates"></input>
        </div>

        <button class="ui button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default GeoCoordSearch;