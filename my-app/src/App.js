import React from 'react';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Listings from './components/Listings';

import {Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <Link to='/'>Home</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/protected'>Listings</Link>
      </div>
      <Switch>
        <Route exact path="/protected" component={Listings} />
        <Route exact path="/" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
