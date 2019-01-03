import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Welcome from '../components/Welcome';
import App from '../components/App';
import NotFound from '../components/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Welcome} />
      <Route path="/restaurant/:restaurantId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
