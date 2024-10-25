import React, { useEffect, useState } from "react";
import { TrendingCoins } from "../config/API";
import axios from "axios";
import { CryptoState } from "../CryptoContext";
import { makeStyles } from "@material-ui/core";
import AliceCarousel, { Link } from "react-alice-carousel";
const CarouselSlider = () => {
  const [trendingCoin, setTrendingCoin] = useState([]);
  const { currency } = CryptoState();
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrendingCoin(data);
  };
  const useStyles = makeStyles({
    CarouselSlider: {
      height: "40%",
      display: "flex",
    },
  });
  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);
  const classes = useStyles();
  const items = trendingCoin.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <Link key={coin.id} to={`/coins/${coin.id}`}>
        <img
          src={coin.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {profit && "+"}
          {coin.price_change_percentage_24h}
        </span>
      </Link>
    );
  });

  console.log(trendingCoin, "trendingCointrendingCoin");

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  return (
    <div className={classes.CarouselSlider}>
      <AliceCarousel
        mouseTracking
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default CarouselSlider;
