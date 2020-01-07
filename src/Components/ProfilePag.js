import React, { Component } from "react";

class ProfilePag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: props.users
    };
  }
  render() {
    return <h1>Desde return</h1>;
  }
}

export default ProfilePag;
