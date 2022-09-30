import React, { useState } from "react";
import {
  Toolbar,
  Box,
  Typography,
  Menu,
  Container,
  MenuItem,
  Avatar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import {
  AppBarStyled,
  LinkStyledHo,
  BoxStyled,
  LinkStyledCc,
  LinkStyledNw,
  LinkMobile
} from "./styles";
const Navbar = ({ selected, setSelected, id, topPageNw, topPage2 }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleTopPage2 = () => {
    topPage2.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleTopPageNw = () => {
    topPageNw.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBarStyled position="fixed">
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
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
            <IconButton
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
                  setSelected("Home");
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
                  setSelected("Crypto");
                }}
              >
                <CandlestickChartIcon
                  sx={{
                    color:
                      selected === `/crypto/${id}`
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
                  setSelected("Nw");
                }}
              >
                <AnnouncementIcon
                  sx={{ color: selected === "/news" ? "#FFD700" : "black" }}
                />
                <LinkMobile to="/news">News</LinkMobile>
              </MenuItem>
            </Menu>
          </Box>
          <Avatar
            sx={{
              display: { xs: "flex", md: "none" },
              bgcolor: "#FFD700",
              mr: 2,
              ml: 5
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
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none"
            }}
          >
            Cryptoworld
          </Typography>
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
                    selected === `/crypto/${id}`
                      ? "#FFD700"
                      : selected === "/cryptocurrencies"
                      ? "#FFD700"
                      : "black",
                  fontSize: 22
                }}
              />
              <LinkStyledCc to="/cryptocurrencies" onClick={handleTopPage2}>
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
              <LinkStyledNw to="/news" onClick={handleTopPageNw}>
                News
              </LinkStyledNw>
            </BoxStyled>
          </Box>
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
};
export default Navbar;
