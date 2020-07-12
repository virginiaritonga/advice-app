import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Home, Saved, Feedback } from './views';
import './App.css';

//Fungsi App untuk menampung semua Route Page
function App() {
  return (
    <Router>
      <div className="App">
        <div className ="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/saved">Saved Advices</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
            </ul>
        </div>
        <header className="App-header">       
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/saved">
            <Saved/>
          </Route>
          <Route path="/feedback">
            <Feedback/>
          </Route>
        </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;


