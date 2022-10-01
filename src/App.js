import React, { useEffect, useContext, useState } from "react";
import { CssBaseline, Typography } from "@mui/material";
import { Route, Routes, useLocation, Link } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Cryptocurrencies from "./components/Crypto/Cryptocurrencies";
import News from "./components/News/News";
import CryptoDetails from "./components/CryptoDetails";
import Navbar from "./components/Navbar/Navbar";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { NavigationContext } from "./components/contexts/NavigationContext";
const App = () => {
  const [id, setId] = useState("");
  const { setSelected } = useContext(NavigationContext);
  const theme = createTheme({
    typography: {
      fontFamily: ["cursive"]
    }
  });

  const { pathname } = useLocation();

  useEffect(() => {
    setSelected(pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Navbar id={id} />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route
            exact
            path="/cryptocurrencies"
            element={<Cryptocurrencies />}
          ></Route>
          <Route
            exact
            path="/crypto/:coinId"
            element={<CryptoDetails setId={setId} />}
          ></Route>
          <Route exact path="/news" element={<News />}></Route>
        </Routes>
        <div style={{ marginTop: 5 }}>
          <Typography
            variant="body2"
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © 2022
            <Link to="/" style={{ color: "black" }}>
              Cryptoworld Inc.
            </Link>
            <br />
            All Rights Reserved.
          </Typography>
        </div>
      </ThemeProvider>
    </>
  );
};
export default App;
