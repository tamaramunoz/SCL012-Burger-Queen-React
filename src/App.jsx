import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Waiter from './components/Waiter';
import Kitchen from './components/Kitchen';
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";


function App() {
  
  return (
<Fragment>
      <Router>
        <div className="container mt-5">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/waiter">
              <Waiter />
            </Route>

            <Route path="/kitchen">
              <Kitchen />
            </Route>


            <Route path="/breakfast" component={Breakfast} />
            <Route path="/lunch" component={Lunch} />
          </Switch>

        </div>
      </Router>
    </Fragment>
  );
}

export default App;
