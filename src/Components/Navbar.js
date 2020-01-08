import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const Navbar = props => {
  return (
    <AppBar position="static" elevation={0} className={props.classes.appBar}>
      <Toolbar className={props.classes.toolbar}>
        <Typography
          variant="h6"
          component="h1"
          noWrap
          className={props.classes.toolbarTitle}
        >
          FaceApp
        </Typography>
        <nav>
          <Button
            component={Link}
            to="/Home"
            color="inherit"
            className={props.classes.link}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/Register"
            color="inherit"
            className={props.classes.link}
          >
            Registro
          </Button>
          <Button
            component={Link}
            to="/Signin"
            color="inherit"
            className={props.classes.link}
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/ProfilePag"
            color="inherit"
            className={props.classes.link}
          >
            Perfil
          </Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles({
  appBar: {
    borderBottom: `1px solid`
  },
  toolbarTitle: {
    flexGrow: 1
  },
  toolbar: {
    flexWrap: "wrap"
  },
  link: {
    margin: (1, 1.5)
  }
})(Navbar);
