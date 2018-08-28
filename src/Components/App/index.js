import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Quiz from './../Quiz'
import Categories from './../Categories';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>     
            <Switch>
              <Route path={"/"} exact component={Categories} />
              <Route path={"/add"} render={(props) => <Quiz {...props} operator="+" />} />
              <Route path={"/sub"} render={(props) => <Quiz {...props} operator="-" />} />
              <Route path={"/multiply"} render={(props) => <Quiz {...props} operator="x" />} />
              <Route path={"/comparison"} render={(props) => <Quiz {...props} operator="___" />} />
              {/* <Route path="/division" render={(props) => <Quiz {...props} operand="/" />}/> */}
              <Route component={Categories} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;


 /* */