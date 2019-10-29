import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Quiz from "./../Quiz";
import Categories from "./../Categories";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true
    };
  }
  componentDidMount() {
    this.setState({
      isOnline: navigator.onLine
    });
  }
  render() {
    return (
      <Fragment>
        {!this.state.isOnline && (
          <div className="Offline-Banner">
            You are offline. You might see different experience :) !!!
          </div>
        )}
        <div className="App">
          <Router>
            <Switch>
              <Route path={"/"} exact component={Categories} />
              <Route
                path={"/add"}
                render={props => <Quiz {...props} operator="+" />}
              />
              <Route
                path={"/sub"}
                render={props => <Quiz {...props} operator="-" />}
              />
              <Route
                path={"/multiply"}
                render={props => <Quiz {...props} operator="x" />}
              />
              <Route
                path={"/comparison"}
                render={props => <Quiz {...props} operator="___" />}
              />
              {/* <Route path="/division" render={(props) => <Quiz {...props} operand="/" />}/> */}
              <Route component={Categories} />
            </Switch>
          </Router>
        </div>
      </Fragment>
    );
  }
}

export default App;

/* */
