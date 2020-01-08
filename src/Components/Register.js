import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

class Register extends Component {
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <div className={this.props.classes.paper}>
          <Avatar className={this.props.classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Registrate
          </Typography>
          <form className={this.props.classes.form} noValidate>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Apellido"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Nombre"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={this.props.classes.submit}
            >
              Registrarse
            </Button>
          </form>
        </div>
        <Box mt={5}></Box>
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
    margin: 1
  },
  form: {
    width: "100%",
    marginTop: 3
  },
  submit: {
    margin: (3, 0, 2)
  }
})(Register);
