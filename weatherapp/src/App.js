import React from "react";
import Header from "./Header";
import CitySearch from "./CitySearch";
import ZipCodeSearch from "./ZipCodeSearch";
import GeoCoordSearch from "./GeoCoordSearch";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
function App() {
  return (
    <main>
      <Header></Header>
      <Route path="/city_search" exact>
        <CitySearch></CitySearch>
      </Route>
      <Route path="/zip_code_search" exact>
        {" "}
        <ZipCodeSearch></ZipCodeSearch>
      </Route>

      <Route path="/geographic_search" exact>
        <GeoCoordSearch></GeoCoordSearch>
      </Route>
    </main>
  );
}

// 5dd22c53579207aa4f23d8438bd2334a
export default App;
