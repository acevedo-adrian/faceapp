import React from "react";
import User from "./User";

const ListUsers = ({ users }) => (
  <div>
    {users.map(user => {
      return <User key={user.login.username} user={user} />;
    })}
  </div>
);

export default ListUsers;
