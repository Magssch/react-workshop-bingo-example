import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import About from "./pages/About";
import Bingo from "./pages/Bingo";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Router>
        <Header>Header til siden</Header>
        <Switch>
          <Route exact path="/">
            <div className={"landingtext"}>
              <h1>Dette er startsiden</h1>
              <br />
              <Link to={"/about"}>Mer om oss</Link>
              <br />
              <br />
              <br />
              <Link to={"/bingo"}>Spill bingo!</Link>
            </div>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/bingo">
            <Bingo />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
