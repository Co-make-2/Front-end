import React from 'react';
import {Route, Redirect} from "react-router-dom";

// Private Route requirements:
// 1. same API as route
// 2. It renders a <Route/> and passes all the props to it
// 3. It checks if the user is authenticated. If they are it
// renders the component prop, otherwise it will redirect
// to /login

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => {
          if (localStorage.getItem("token")) {
            //if user is authenticated, render the given component
            return <Component {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    );
  };
  
  export default PrivateRoute;