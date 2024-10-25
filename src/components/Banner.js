import { Typography, makeStyles } from "@material-ui/core";
import React from "react";
import BackgroundImage from "../assets/images/banner-img.jpg";
import CarouselSlider from "./CarouselSlider";

const Banner = () => {
  const useStyles = makeStyles({
    banner: {
      backgroundImage: `url(${BackgroundImage})`,
      backgroundRepeat: "norepeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      textAlign: "center",
      padding: "40px 0",
    },
    bannerTitle: {
      fontSize: "32px",
    },
    bannerBodycopy: {
      fontSize: "16px",
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Typography variant="h1" className={classes.bannerTitle}>
        Crypto Insight
      </Typography>
      <Typography variant="p" className={classes.bannerBodycopy}>
        Track, Analyze, and Discover Your Favorite Cryptos
      </Typography>
      <CarouselSlider />
    </div>
  );
};

export default Banner;
