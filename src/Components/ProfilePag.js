import React, { Fragment } from "react";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';


import Typography from '@material-ui/core/Typography';


import Container from '@material-ui/core/Container';



const ProfilePag = (props) => {

    
    // const userSelect = users.filter((user)=>{
    //   if(user.login.username === "blueelephant921"){
    //     return user
    //   }      
    // })
    
    return(
    )
  
}

export default withStyles({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
 
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: (1, 1.5),
  },
  heroContent: {
    padding: (8, 0, 6),
  },
  cardHeader: {
    backgroundColor:'dark' 
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: (2),
  },
  footer: {
    borderTop: `1px solid `,
    marginTop: (8),
    paddingTop: (3),
    paddingBottom: (3),
    
  },
})(ProfilePag);
