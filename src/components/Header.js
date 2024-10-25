import {
  AppBar,
  Container,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import {useNavigate} from "react-router-dom"
import { CryptoState } from "../CryptoContext";

const Header = () => {
  const{ currency, setCurrency} = CryptoState()
  const useStyles = makeStyles({
    title: {
      flex: "1",
      color: "Gold",
      fontFamily: "Poppins",
      cursor: "pointer",
    },
  });

  const Theme = createTheme({
    palette:{
        primary:{
            main :"#fff"
        },
        type:"dark"
    }
  })
  const classes = useStyles();
  const navigate = useNavigate();
  console.log(currency,"useContext(Crypto)useContext(Crypto)useContext(Crypto)")
  return (
    <>
    <ThemeProvider theme={Theme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography onClick = {()=>{navigate("/")}} className={classes.title} variant="h4">Crypto Insight</Typography>
            <Select variant="outlined" style={{width:100, height:40, marginRight:15}} value={currency}
 onChange={(e)=>{setCurrency(e.target.value)}}>
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Header;
