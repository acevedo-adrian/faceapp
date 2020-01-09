import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./Components/Register";
import Signin from "./Components/Signin";
import ProfilePag from "./Components/ProfilePag";
import Home from "./Components/Home";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

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
        <Container maxWidth="md">
          <CssBaseline />
          <Route exact path="/">
            <Home users={this.state.users} />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Signin">
            <Signin />
          </Route>
          <Route path="/ProfilePag">
            <ProfilePag users={this.state.users} />
          </Route>
        </Container>
      </Router>
    );
  }
}

export default App;
