import React, { useEffect, useContext } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Cryptocurrencies from "./components/Crypto/Cryptocurrencies";
import News from "./components/News/News";
import CryptoDetails from "./components/CryptoDetails";
import Navbar from "./components/Navbar/Navbar";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { NavigationContext } from "./components/contexts/NavigationContext";
import Footer from "./components/Footer/Footer";
const App = () => {
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
  }, [pathname, setSelected]);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Navbar />
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
            element={<CryptoDetails />}
          ></Route>
          <Route exact path="/news" element={<News />}></Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
};
export default App;
