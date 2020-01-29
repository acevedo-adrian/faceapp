import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import firebase from '../Initializers/firebase';

class Register extends Component {
  // inicializamos nuestro estado inicial
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.state = {
      firstName:'',
      lastName:'',
      email:'',
      password:''
      
  }
  
  } 
  
  handleChange(e){  
    this.setState({
        [e.target.name]:e.target.value
    })
  }
  handleRegister(e){  
    
   
    e.preventDefault();
    firebase.database().ref('users/').push({   
        firstName: this.state.firstName,
        lastName : this.state.lastName,
        email:this.state.email,
        password:this.state.password
    }).catch(err=>console.log(err)
    )
  }

  componentDidMount() {
    firebase.database()
    
  }
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <div className={this.props.classes.paper}>
          <AccountCircleOutlinedIcon
            className={this.props.classes.avatar}
          ></AccountCircleOutlinedIcon>
          <Typography component="h1" variant="h5">
            Registrate
          </Typography>
          <form className={this.props.classes.form}  onSubmit={this.handleRegister}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Apellido"
                  value={this.state.firstName}   
                  onChange={this.handleChange}               
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
                  value={this.state.lastName} 
                  onChange={this.handleChange}      
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
                  value={this.state.email}  
                  onChange={this.handleChange}      
                  
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
                  value={this.state.password}  
                  onChange={this.handleChange}      
                  
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
    margin: 1,
    width: 50,
    height: 50
  },
  form: {
    width: "100%",
    marginTop: 3
  },
  submit: {
    margin: (3, 0, 2)
  }
})(Register);
