import React from "react";
import Header from "./Header";
import Weatherpage from "./Weatherpage";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
function App() {
  return (
    <main>
      <Header></Header>
      <Route path="/city_search" exact>
        <Weatherpage parameterName="q" title= "City Search"></Weatherpage>
      </Route>
      <Route path="/zip_code_search" exact>
        <Weatherpage parameterName="zip" title= "Zip Code Search"></Weatherpage>
      </Route>

      <Route path="/geographic_search" exact></Route>
    </main>
  );
}

export default App;
