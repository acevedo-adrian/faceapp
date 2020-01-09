import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

class Signin extends Component {
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <div className={this.props.classes.paper}>
          <AccountCircleOutlinedIcon
            className={this.props.classes.avatar}
          ></AccountCircleOutlinedIcon>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={this.props.classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={this.props.classes.submit}
            >
              Acceder
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}
export default withStyles({
  paper: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: 1,
    width: 50,
    height: 50
  },
  form: {
    width: "100%",
    marginTop: 1
  },
  submit: {
    margin: (3, 0, 2)
  }
})(Signin);
