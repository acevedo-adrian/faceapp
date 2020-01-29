import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import firebase from '../Initializers/firebase';
import { Redirect} from 'react-router-dom';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      logIn: false
      
  }}
  componentDidMount() {
    firebase.database()
    
  }
  handleChange(e){
    this.setState({
        [e.target.name]:e.target.value
    })
  }
  handleLogin(e){

    e.preventDefault();
    firebase
    .database()
    .ref("users/")
    .once("value")
    .then((snapshot) =>{
            
        snapshot.forEach(child => {
            console.log("Key",child.key)
            console.log("Val",child.val())            
      
      localStorage.setItem('key', JSON.stringify(child.key));
      this.setState({
        logIn:true,
      });
		
      })
      
      
    }).catch((err)=>(console.log(err)));
  }
  render() {
   
      if(!this.state.logIn){
        return (
      <Container component="main" maxWidth="xs">
        <div className={this.props.classes.paper}>
          <AccountCircleOutlinedIcon
            className={this.props.classes.avatar}
          ></AccountCircleOutlinedIcon>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={this.props.classes.form} noValidate onSubmit={this.handleLogin}>
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
              value={this.state.email}

              onChange={this.handleChange}
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
              value={this.state.password}
              onChange={this.handleChange}
              
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
    </Container> );}else{
      return(
        <Redirect to="/ProfilePag" />
        ) 
    }
   
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
