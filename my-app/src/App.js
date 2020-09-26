import React, { useState } from "react";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Listings from "./components/Listings";
import UserProfile from "./components/UserProfile";
import UpdateProfile from "./components/UpdateProfile";
import PrivateRoute from "./components/PrivateRoute";

import { Route, Switch, Link } from "react-router-dom";

function App() {
  const [id, setId] = useState(() => {
    return window.localStorage.getItem("userId");
  });
  return (
    <div className="App">
      <div>
        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Co-Make</h1>
              <h2 className="subtitle">Making our Communities Thrive</h2>
              <nav className="level">
                <Link
                  className="level-item has-text-centered is-family-monospace"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="level-item has-text-centered is-family-monospace"
                  to="/signup"
                >
                  Sign Up
                </Link>
                <Link
                  className="level-item has-text-centered is-family-monospace"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="level-item has-text-centered is-family-monospace"
                  to="/protected"
                >
                  Listings
                </Link>
                <Link
                  className="level-item has-text-centered is-family-monospace"
                  to="/user-profile"
                >
                  User Profile
                </Link>
              </nav>
            </div>
          </div>
        </section>
      </div>
      <Switch>
        <PrivateRoute exact path="/protected" component={Listings} />
        <PrivateRoute path="/user-profile" component={UserProfile} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} />
        <Route
          path="/login"
          render={(props) => <Login {...props} setId={setId} />}
        />
        <Route path="/signup" component={Signup} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
