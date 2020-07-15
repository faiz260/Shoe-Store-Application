import React from "react";
import Shoes from "../shoes.json";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "'Oswald', sans-serif",
    fontFamily: "'Raleway', sans-serif",
    fontFamily: "'Roboto Condensed', sans-serif",
    width: 300,
    margin: "auto",
    marginTop: 60,
    marginRight: 20,
    display: "inline-block",
    // alignItems: "center",
    // justifyContent: "center",
  },
  media: {
    height: 0,
    width: 200,
    margin: "auto",
    marginTop: 10,
    paddingTop: "56.25%", // 16:9
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  namePriceCard: {
    margin: "auto",
    width: "90%",
    height: 70,
    paddingTop: 20,
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    fontWeight: 500,

  },
  price: {
    fontWeight: 600,
    fontSize: 18
  },
}));

export const ProductIndex = () => {
  const classes = useStyles();

  console.log(Shoes);

  return (
    <>
      {Object.entries(Shoes).map(([slug, { name, img, price }]) => {
        // console.log(name, img)

        return (
          <Card className={classes.root} key={name}>
            <Link to={`/products/${slug}`} className={classes.link}>
              <CardMedia className={classes.media} image={img} title={name} />
              <Card className={classes.namePriceCard}>
                <CardContent>
                  <Typography variant="subtitle1">{name}</Typography>
                  <Typography variant="subtitle2" className={classes.price} >{price}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Card>
        );
      })}
    </>
  );
};
