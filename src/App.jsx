import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Waiter from './components/Waiter';
import Kitchen from './components/Kitchen';


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
          </Switch>

        </div>
      </Router>
    </Fragment>
  );
}

export default App;
