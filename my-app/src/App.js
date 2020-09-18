import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
      <switch>
        <Route path ='/signup' component={Signup}/>
      </switch>
    </div>
  );
}

export default App;
