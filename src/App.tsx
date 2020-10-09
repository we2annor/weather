import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SecondPage from "./components/pages/SecondPage";
import Navigation from "./components/navigation/Navigation";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className='ui container'>
        <Navigation />

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
  );
};

export default App;
