import { Route } from 'react-router-dom';

export default (route) => {
  return (
    <Route
      path={ route.path }
      exact={ route.exact }
    >
      <route.component />
    </Route>
  );
};