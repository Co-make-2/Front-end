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
      <nav class="level">
        <Link class="level-item has-text-centered" to='/'>Home</Link>
        <Link class="level-item has-text-centered" to='/signup'>Sign Up</Link>
        <Link class="level-item has-text-centered" to='/register'>Login</Link>
        <Link class="level-item has-text-centered" to='/protected'>Listings</Link>
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
