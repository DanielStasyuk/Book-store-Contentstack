import React from "react";
import { Route, Switch } from "react-router-dom";
import { LANDING_ROUTE } from "./common/routes";
import Home from "./pages/home";
import Landing from "./pages/landing";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path={LANDING_ROUTE} component={Landing} />
    </Switch>
  );
};

export default Routing;
