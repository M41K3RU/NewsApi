import React from "react";
import "./Main.css";
import { Switch, Route } from "react-router-dom";
import HomePage from ".//HomePage/HomePage";
import CoronaNewsPage from "./CoronaNewsPage";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/CoronaNewsPage">
        <CoronaNewsPage />
      </Route>
    </Switch>
  </main>
);

export default Main;
