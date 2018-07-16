import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Quiz from './../Quiz'
import Categories from './../Categories';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className="App__Logo">
              <Link to="/">Speedy Math</Link>
            </div>
            <Switch>
              <Route path="/" exact component={Categories} />
              <Route path="/add" render={(props) => <Quiz {...props} operator="+" />} />
              <Route path="/sub" render={(props) => <Quiz {...props} operator="-" />} />
              <Route path="/multiply" render={(props) => <Quiz {...props} operator="x" />} />
              <Route path="/comparison" render={(props) => <Quiz {...props} operator="___" />} />
              {/* <Route path="/division" render={(props) => <Quiz {...props} operand="/" />}/> */}
              {/* <Route component={NoMatch} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
