import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routesList from "./routes.js";

export default () => {
  return (
    <Router>
      <Switch>
        {routesList.map((route, i) => (
          <Route
            path={route.path}
            exact={route.exact}
            render={(props) => <route.component />}
          />
        ))}
        <Route component={() => <h1>Not Found!</h1>} />
      </Switch>
    </Router>
  );
};