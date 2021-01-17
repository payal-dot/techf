import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import Login from "./pages/public/Login";
import Admin from "./pages/private/Admin";

const PrivateRoute = ({ children, ...rest }) => {
  const currentUser = useSelector(state => state.currentUser);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
};

const PublicRoute = ({ children, ...rest }) => {
  const currentUser = useSelector(state => state.currentUser);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
            <Redirect
              to={{
                pathname: "/admin",
                state: { from: location }
              }}
            />
          ) : (
            children
          )
      }
    />
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PublicRoute path="/" exact>
            <Login/>
          </PublicRoute>
          <PrivateRoute path="/admin" >
            <Admin/>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
