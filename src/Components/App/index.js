import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Quiz from './../Quiz'
import Categories from './../Categories';
import './App.css';
// console.log("process.env.NODE_ENV", process.env.NODE_ENV)
const path = process.env.NODE_ENV === "production" ? "/speedy-math" : ''
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className="App__Logo">
              <Link to={`${path}/`}>Speedy Math</Link>
            </div>
            <Switch>
            <Route path={`${path}/`} exact component={Categories} />
              <Route path={`${path}/add`} render={(props) => <Quiz {...props} operator="+" />} />
              <Route path={`${path}/sub`} render={(props) => <Quiz {...props} operator="-" />} />
              <Route path={`${path}/multiply`} render={(props) => <Quiz {...props} operator="x" />} />
              <Route path={`${path}/comparison`} render={(props) => <Quiz {...props} operator="___" />} />
              {/* <Route path="/division" render={(props) => <Quiz {...props} operand="/" />}/> */}
              <Route component={Categoriesk} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;


 /* */ 