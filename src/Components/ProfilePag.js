import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

class ProfilePag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

  filterUsers = () => {
    const user = this.props.users.filter(user => {
      if (user.login.username === "smallgorilla841") {
        return user;
      }
    });
    return user;
  };

  render() {
    if (this.props.users.length > 0) {
      const user = this.filterUsers();

      const { classes } = this.props;

      return (
        <Container component="main" maxWidth="md">
          <div className={classes.paper}>
            <Avatar
              alt="Remy Sharp"
              src={user[0].picture.large}
              className={classes.large}
            />
            <Typography component="h1" variant="h5">
              {user[0].login.username}
            </Typography>
            <form className={this.props.classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="Apellido"
                    defaultValue={user[0].name.first}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} >
                <TextField                  
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Nombre"
                  name="lastName"
                  defaultValue={user[0].name.last}
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
                  defaultValue={user[0].email}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={8}>
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
              {/* buenas noches, tengo una duda, paso un state(el cual esta cargado con una consulta a una api) este state lo paso a un componente como props, el problemas es que cuando hace por primera ves el componente el props es [], luego pasa un ratito y se carga con los valores que le pase. 
              quisiera saber como hago para poder deteneter el render hasta que este cargado el props, yo lo que hice es un if(que mientras props esta [] tire un spiner de carga caso contrario renderiza los datos que recibe por props) */}
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
              </Grid>
            </form>
          </div>
        </Container>
      );
    } else {
      return <p className="text-center">Cargando empleados...</p>;
    }
  }
}

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
    width: 300,
    height: 300
  }
})(ProfilePag);
