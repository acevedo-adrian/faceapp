import React from "react";
import User from "./User";
import Grid from "@material-ui/core/Grid";

const ListUsers = ({ users }) => (
  <Grid container spacing={3}>
    {users.map(user => {
      return <User key={user.login.username} user={user} />;
    })}
  </Grid>
);

export default ListUsers;
