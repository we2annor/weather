import React from "react";
import Home from "../pages/home";
import SecondPage from "../pages/secondPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";

const Navigation = () => {
  return (
    <div>
      <Router>
        <div className='ui container'>
          <nav>
            <ul className='ui secondary  menu'>
              <li className='item'>
                <Link to='/'>Home</Link>
              </li>
              <li className='item'>
                <Link to='/secondPage'>Second Page</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/secondPage'>
              <SecondPage />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Navigation;
