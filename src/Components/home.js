import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 40,
  },
  tagline:{
   color:"rgba(0,0,0, 0.6)",
   marginTop: 80,
   fontSize: 18
  },
  button:{
    marginTop: 40,
    backgroundColor: "#efefef"
  },
  link:{
      textDecoration: "none"
  }
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h1" className={classes.title}>
        Welcome to Nike{" "}
      </Typography>
      <Typography variant="body2" className={classes.tagline}>
        Explore the wonderful world of shoes{" "}
      </Typography>
     <Link to="/products" className={classes.link}>
      <Button variant="contained" className={classes.button} >
        Visit store
      </Button>
      </Link>
    </div>
  );
};
