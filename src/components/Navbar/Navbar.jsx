import React, { useState, useContext } from "react";
import {
  Toolbar,
  Box,
  Typography,
  Menu,
  Container,
  MenuItem,
  Avatar,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import { NavigationContext } from "../contexts/NavigationContext";

import {
  AppBarStyled,
  LinkStyledHo,
  BoxStyled,
  LinkStyledCc,
  LinkStyledNw,
  LinkMobile
} from "./styles";
import "./styles.css";
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { selected, selectedCrypto } = useContext(NavigationContext);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const isMobile = useMediaQuery("(max-width:900px)");

  console.log(selected);

  return (
    <AppBarStyled position="fixed" className="AppBar">
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: isMobile ? "center" : "space-between"
          }}
        >
          <Box display="flex">
            <Avatar
              sx={{
                display: { xs: "none", md: "flex" },
                bgcolor: "#FFD700",
                mr: 2
              }}
            >
              <CurrencyBitcoinIcon
                sx={{
                  marginRight: 0.26,
                  fontSize: 35
                }}
              />
            </Avatar>

            <Typography
              variant="h6"
              sx={{
                mr: 2,
                mt: 0.5,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
                justifyContent: "space-between"
              }}
            >
              Cryptoworld
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            {/* Mobile view */}
            <Box display="flex" sx={{ mt: 0.5 }}>
              <Avatar
                sx={{
                  bgcolor: "#FFD700",
                  mr: 2
                }}
              >
                <CurrencyBitcoinIcon
                  sx={{
                    marginRight: 0.26,
                    fontSize: 35
                  }}
                />
              </Avatar>

              <Typography
                variant="h6"
                sx={{
                  mr: 2,
                  mt: 0.5,

                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "black",
                  textDecoration: "none",
                  justifyContent: "space-between"
                }}
              >
                Cryptoworld
              </Typography>
            </Box>

            <IconButton
              className="icon-button"
              size="large"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              style={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              keepMounted
              anchorEl={anchorElNav}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                }}
              >
                <HomeIcon
                  sx={{ color: selected === "/" ? "#FFD700" : "black" }}
                />
                <LinkMobile to="/">Home</LinkMobile>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                }}
              >
                <CandlestickChartIcon
                  sx={{
                    color:
                      selected === `/crypto/${selectedCrypto}`
                        ? "#FFD700"
                        : selected === "/cryptocurrencies"
                        ? "#FFD700"
                        : "black"
                  }}
                />
                <LinkMobile to="/cryptocurrencies">Cryptocurrencies</LinkMobile>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                }}
              >
                <AnnouncementIcon
                  sx={{ color: selected === "/news" ? "#FFD700" : "black" }}
                />
                <LinkMobile to="/news">News</LinkMobile>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <BoxStyled display="flex">
              <HomeIcon
                sx={{
                  color: selected === "/" ? "#FFD700" : "black",
                  fontSize: 22
                }}
              />
              <LinkStyledHo to="/">Home</LinkStyledHo>
            </BoxStyled>

            <BoxStyled display="flex">
              <CandlestickChartIcon
                sx={{
                  color:
                    selected === `/crypto/${selectedCrypto}`
                      ? "#FFD700"
                      : selected === "/cryptocurrencies"
                      ? "#FFD700"
                      : "black",
                  fontSize: 22
                }}
              />
              <LinkStyledCc to="/cryptocurrencies">
                Cryptocurrencies
              </LinkStyledCc>
            </BoxStyled>
            <BoxStyled display="flex">
              <AnnouncementIcon
                sx={{
                  color: selected === "/news" ? "#FFD700" : "black",
                  fontSize: 22
                }}
              />
              <LinkStyledNw to="/news">News</LinkStyledNw>
            </BoxStyled>
          </Box>
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
};
export default Navbar;
