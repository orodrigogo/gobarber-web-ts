import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as RouteDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface IRouteProps extends RouteDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location }, // para sempre manter o histórico de redirecionamentos
            }}
          />
        );
      }}
    />
  );
};

export default Route;
