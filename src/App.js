import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Dashboard from './Dashboard';
import Home from './Home';
import About from "./About";
import Cart from "./Cart";

function App() {
  return (
    <>
    <Router>
    
    <Switch>
    
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/about" component={About} exact={true} >
            </Route>
            <Route path="/home" component={Home} exact={true}>
            </Route>
            <Route path="/cart" component={Cart} exact={true}>
            </Route>
          </Switch>
    </Router>
    </>
    
  );
}

export default App;
