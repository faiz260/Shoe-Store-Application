import React from "react";
import Shoes from "../shoes.json";
import { useParams } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    marginTop: 50,
    margin: "auto",
    position: "center",
  },
  media: {
    height: 0,
    width: 400,
    margin: 30,
    paddingTop: "56.25%", // 16:9
    // paddingBottom: "56.25%"
  },
  price: {
    margin: "auto",
    width: "80%",
    height: 50,
    marginTop: 20,
    marginBottom: 20,
  },
}));

export const Item = () => {
  const classes = useStyles();
  const { slug } = useParams();
  const shoe = Shoes[slug];
  // console.log(slug);

  if (!shoe) {
    return <h1>Not Found !</h1>;
  }
  const { name, img, price } = shoe;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
      </CardContent>

      <CardMedia className={classes.media} image={img} title={name} />
      <Card className={classes.price}>
        <CardContent>
          <Typography variant="h6"> Price:          {price}</Typography>
        </CardContent>
      </Card>
    </Card>
  );
};
