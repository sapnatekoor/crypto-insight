import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CryptoContext from "../CryptoContext";

const Layout = () => {
 

  const useStyles = makeStyles({
    outlet: {
      backgroundColor: "#000",
      color: "#FFF",
      minHeight:"100vh"
    },
  });


  const classes = useStyles();
  return (
    <CryptoContext>
    <div className={classes.outlet}>
      <Header />
      <Outlet />
    </div>
    </CryptoContext>
  );
};

export default Layout;
