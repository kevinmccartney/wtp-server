import 'babel-polyfill';

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './routes';

import NotFound from './views/NotFound';

const Router = () => (
  <div>
    <Switch>
      {routes.map(({
        path,
        exact,
        component: Component,
        ...rest
      }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={props => (
            <Component {...props} {...rest} />
          )}
        />
      ))}
      <Route render={props => <NotFound {...props} />} />
    </Switch>
  </div>
);

export default Router;
