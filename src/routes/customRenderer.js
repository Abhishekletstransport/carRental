import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const RouteWithSubRoutes = (route) => {
  return (
    <Route path={route.path} render={(props) => (
      <route.component {...props} routes={route.routes}/>
    )}/>
  );
};


const customRenderRoutes = (routes) => (
  <Switch>
    {
      routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))
    }
  </Switch>
);

export default customRenderRoutes;
