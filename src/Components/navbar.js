import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Link,} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    fontWeight: 500
    // position: "fixed",
    // top: 0
  },
  link: {
    textDecoration: "none",
    color: "black",
    marginRight: "50px",
    fontWeight: 400
  },
  offset: theme.mixins.toolbar,
}));

export const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <Link to="/" className={classes.link}>
            <Typography variant="h6" className={classes.link}>
              Home
            </Typography>
          </Link>
          <Link to="/products" className={classes.link}>
            <Typography variant="h6" className={classes.link}>
              Products
            </Typography>
          </Link>
          <Link to="/about" className={classes.link}>
            <Typography variant="h6" className={classes.link}>
              About
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
};
