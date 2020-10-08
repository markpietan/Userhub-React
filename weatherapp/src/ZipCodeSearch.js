import React from "react";
const ZipCodeSearch = () => {
  return (
    <section className= "ui container">
      <form class="ui form">
        <div class="field">
          <label htmlFor= "Zip Code">Zip Code Search</label>
          <input type="text" name="Zip Code" placeholder="Zip Code"></input>
        </div>

        <button class="ui button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ZipCodeSearch;