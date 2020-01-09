import React from "react";
import ListUsers from "./ListUsers";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const Home = props => {
  const { users, classes } = props;
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}></Avatar>
      <Typography component="h1" variant="h5">
        Usuarios Registrados
      </Typography>
      <ListUsers users={users} />
    </div>
  );
};

export default withStyles({
  paper: {
    marginTop: 10,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: 1
  }
})(Home);
