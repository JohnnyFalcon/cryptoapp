import React, { useEffect, useState } from "react";
import { CssBaseline, Typography } from "@mui/material";
import { Route, Routes, useLocation, Link } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Cryptocurrencies from "./components/Crypto/Cryptocurrencies";
import News from "./components/News/News";
import CryptoDetails from "./components/CryptoDetails";
import Navbar from "./components/Navbar/Navbar";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
const App = () => {
  const [selected, setSelected] = useState("");

  const [topPageCrypto, setTopPageCrypto] = useState("");
  const [topPageNw, setTopPageNw] = useState("");
  const [id, setId] = useState("");
  const theme = createTheme({
    typography: {
      fontFamily: ["cursive"]
    }
  });

  let location = useLocation();

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Navbar
          selected={selected}
          setSelected={setSelected}
          id={id}
          topPageNw={topPageNw}
          topPageCrypto={topPageCrypto}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Homepage topPageCrypto={topPageCrypto} topPageNw={topPageNw} />
            }
          ></Route>
          <Route
            exact
            path="/cryptocurrencies"
            element={
              <Cryptocurrencies
                selected={selected}
                setTopPageCrypto={setTopPageCrypto}
              />
            }
          ></Route>
          <Route
            exact
            path="/crypto/:coinId"
            element={<CryptoDetails setId={setId} />}
          ></Route>
          <Route
            exact
            path="/news"
            element={<News selected={selected} setTopPageNw={setTopPageNw} />}
          ></Route>
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
