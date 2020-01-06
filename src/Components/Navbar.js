import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Navbar = () => {

  return (   
    <div>
        <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component ="h1" >
            FaceApp
          </Typography>
          <Button component={Link}  to="/Home" color="inherit">Home</Button>
          <Button component={Link}  to="/Register"  color="inherit">Register</Button>
          <Button component={Link}  to="/Signin" color="inherit">Signin</Button>
          <Button component={Link}  to="/ProfilePag"  color="inherit">ProfilePag</Button>
        </Toolbar>
      </AppBar>
    
    </div>
  );
};

export default Navbar;
