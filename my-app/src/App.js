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
      <nav className="level">
        <Link className="level-item has-text-centered" to='/'>Home</Link>
        <Link className="level-item has-text-centered" to='/signup'>Sign Up</Link>
        <Link className="level-item has-text-centered" to='/register'>Login</Link>
        <Link className="level-item has-text-centered" to='/protected'>Listings</Link>
      </nav>
      </div>
      <Switch>
        <Route exact path="/protected" component={Listings} />
        <Route exact path="/register" component={Login} />
        <Route exact path="/signup" component={Signup}/>
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
