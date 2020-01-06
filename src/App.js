import React, { Component, Fragment } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Components/Register";
import Signin from "./Components/Signin";
import ProfilePag from "./Components/ProfilePag";
import Home from "./Components/Home";

class App extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    this.consultUsers();
  }

  consultUsers = async () => {
    const url = `https://randomuser.me/api/?seed=foobar&results=20`;

    const reply = await fetch(url);

    const users = await reply.json();

    this.setState({
      users: users.results
    });
  };

  render() {
    return (
      <Router>
        <Navbar />

        <Route path="/Home">
          <Home users={this.state.users} />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Signin">
          <Signin />
        </Route>
        <Route path="/ProfilePag">
          <ProfilePag />
        </Route>
      </Router>
    );
  }
}

export default App;
