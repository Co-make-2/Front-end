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
        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container">
            <h1 className="title">
          Co-Make
        </h1>
        <h2 className="subtitle">
          Making our Communities Thrive
        </h2>
              <nav className="level">
                <Link className="level-item has-text-centered is-family-monospace" to='/'>Home</Link>
                <Link className="level-item has-text-centered is-family-monospace" to='/signup'>Sign Up</Link>
                <Link className="level-item has-text-centered is-family-monospace" to='/register'>Login</Link>
                <Link className="level-item has-text-centered is-family-monospace" to='/protected'>Listings</Link>
              </nav>
            </div>
          </div>
        </section>
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
