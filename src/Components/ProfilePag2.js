import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const ProfilePag = props => {
  const { users, classes } = props;
  const userSelect = users.filter(user => {
    if (user.login.username === "smallgorilla841") {
      return user;
    }
  });
  console.log(userSelect);
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <h1>Hola</h1>
      </div>
    </Container>
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
  },
  large: {
    width: 100,
    height: 100
  }
})(ProfilePag);
