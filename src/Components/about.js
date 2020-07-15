import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "auto",
    marginTop: 40,
    marginLeft: 20,
    // float: "left",
  },
  content: {
    maxWidth: 700,
    display: "inline-block",
    bottom: 0,
    marginTop: 70
  },
}));

export const About = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h1" className={classes.title}>
        About us
      </Typography>
      <div className={classes.content}>
        <Typography variant="subtitle1">
          Our mission is what drives us to do everything possible to expand
          human potential. We do that by creating groundbreaking sport
          innovations, by making our products more sustainably, by building a
          creative and diverse global team and by making a positive impact in
          communities where we live and work. Based in Beaverton, Oregon, NIKE,
          Inc. includes the Nike, Converse, and Jordan brands.
        </Typography>
      </div>
    </div>
  );
};
