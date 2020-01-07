import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


const User = props => {
  // const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  const { first, last } = props.user.name;
  const img = props.user.picture.large;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={props.classes.card} >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom color="textSecondary" component="h3">
              Hola, mi nombre es
            </Typography>
            <Typography variant="h6" component="h3">
              {last}
            </Typography>
          </CardContent>
        </CardActionArea>
        
      </Card>
    </Grid>
  );
};

export default withStyles({
  // card: {
  //   maxWidth: 200,
  // },
  // media: {
  //   height: 0,
  //   paddingTop: '40%', // 16:9
  // },

  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
})(User);
