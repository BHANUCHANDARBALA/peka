import React from "react";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import ErrorScreen from "./pages/ErrorScreen";

function AppRouter() {
  useEffect(() => {}, []);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ServerError" component={ErrorScreen} />
      <Route path="**" component={ErrorScreen} />
    </Switch>
  );
}

export default AppRouter;
