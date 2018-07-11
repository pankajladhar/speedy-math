import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Quiz from './../Quiz'
import Categories from './../Categories';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__Logo">
          <a href="/" >Speedy Math</a>
        </div>
        <Router>
          <Switch>
            <Route path="/" exact component={Categories} />
            <Route path="/add" render={(props) => <Quiz {...props} operand="+" />}/>
            <Route path="/multiply" render={(props) => <Quiz {...props} operand="x" />}/>
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
