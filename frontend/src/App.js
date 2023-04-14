// import logo from './logo.svg';
import React from 'react';
import './App.css';
// react-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import { Restaurants } from './containers/Restaurants';
import { Foods } from './containers/Foods';
import { Orders } from './containers/Orders';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/restaurants">
            <Restaurants />
          </Route>
          {/* <Route exact path="/foods">
          <Foods/>
         </Route> */}
          <Route exact path="/orders">
            <Orders />
          </Route>
          <Route
            exact
            path="/restaurants/:restaurantsId/foods"
            render={({ match }) => <Foods match={match} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
