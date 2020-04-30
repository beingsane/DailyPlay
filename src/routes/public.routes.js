import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
export default function PublicRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/landingpage" component={LandingPage} />
    </Switch>
  );
}
