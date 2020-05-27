import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../src/App.css'
import Home from './views/Home';
import Waiter from './views/Waiter';
import Kitchen from './views/Kitchen';
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";


function App() {
  
  return (
<Fragment>
      <Router>
        <div className="container">
          
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
