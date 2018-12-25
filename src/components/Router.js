import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Location from './Location';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Location} />
      <Route path="/restaurant/:restaurantId" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
