import React,{Component} from "react";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";


import firebase from '../Initializers/firebase';
import { render } from "@testing-library/react";

class  ProfilePag extends Component{
  
  constructor(props) {
    super(props);   
    this.state = {
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      stado: false
     
  }}
  componentDidMount() {
    firebase.database();
    const keys = localStorage.getItem('key');
    const keyPase = JSON.parse(keys);
    this.filterUsers(keyPase);

    
  }
  filterUsers(keyPase){

    let user='';
        firebase
        .database()
        .ref("users/")
        .once("value")
        .then((snapshot) =>{
                
            snapshot.forEach(child => {
              console.log('desde el keyP1'+ keyPase);
              console.log('desde el keyP2ß'+ child.key);
              if(keyPase === child.key){
                 console.log("values",child.val())
                // user = child.val();
                this.setState({
                  firstName: child.val().firstName,
                  lastName: child.val().lastName,
                  email: child.val().email,
                  password: child.val().password,
                  stado: true
                });            
              }
        
          })
          
        }).catch((err)=>(console.log(err)));
  };



  
  
render(){
    
  if(this.state.stado){
    const { classes  } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar
            alt="Remy Sharp"
            // src={user[0].picture.large}
            className={classes.large}
          />
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  autoComplete="username"
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Nombre de Usuario"
                  defaultValue={this.state.email}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="password"
                  name="password"
                  variant="outlined"
                  required
                  fullWidth
                  type="password"
                  id="password"
                  label="password"
                  defaultValue={this.state.password}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Apellido"
                  defaultValue={this.state.firstName}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Nombre"
                  name="lastName"
                  defaultValue={this.state.lastName}
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
                  defaultValue={this.state.email}
                  autoComplete="email"
                />
              </Grid>
              {/* <Grid item xs={8}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="street"
                  label="Nombre calle"
                  name="street"
                  defaultValue={user[0].location.street.name}
                  autoComplete="street"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="streetNumber"
                  label="Nombre calle"
                  name="streetNumber"
                  defaultValue={user[0].location.street.number}
                  autoComplete="streetNumber"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  label="Ciudad"
                  name="city"
                  defaultValue={user[0].location.city}
                  autoComplete="city"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="state"
                  label="Estado"
                  name="state"
                  defaultValue={user[0].location.state}
                  autoComplete="state"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="country"
                  label="Pais"
                  name="country"
                  defaultValue={user[0].location.country}
                  autoComplete="country"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={props.classes.submit}
                >
                  Guardar Cambios
                </Button>
              </Grid>*/}
            </Grid> 
          </form>
        </div>
      </Container>
    );
  } else{
    return (<div>
       <h1>Cargando</h1>
      <div className={this.props.classes.root}>
        <LinearProgress variant="query" color="secondary" />
      </div>
    </div>
           
      )
  }
}
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
    width: 200,
    height: 200
  },
  submit: {
    margin: (3, 0, 2)
  }
})(ProfilePag);
