import React from "react";
import ListUsers from "./ListUsers";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import FaceIcon from "@material-ui/icons/Face";

const Home = props => {
  const { users, classes } = props;
  return (
    <div className={classes.paper}>
      <FaceIcon className={classes.avatar}></FaceIcon>
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
    width: 50,
    height: 50
  }
})(Home);
