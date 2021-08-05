import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RouteNames, routes } from '../../utils/routes';

export const AppRouter: React.FC = () => {
  return (
    <Switch>
      {routes.map(({ component, path }) => (
        <Route key={path} path={path} component={component} exact />
      ))}
      <Redirect to={RouteNames.Home} />
    </Switch>
  );
};
