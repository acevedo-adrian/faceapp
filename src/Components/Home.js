import React, { Component, Fragment } from "react";
import ListUsers from "./ListUsers";

class Home extends Component {
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
    return <Fragment>{<ListUsers users={this.state.users} />}</Fragment>;
  }
}

export default Home;
