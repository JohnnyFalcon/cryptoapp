import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Typography, Grid, Box, Chip, useMediaQuery } from "@mui/material";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import CountUp from "react-countup";
import Cryptocurrencies from "../Crypto/Cryptocurrencies";
import News from "../News/News";

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  const isDesktop = useMediaQuery("(min-width:600px)");
  const isMobile = useMediaQuery("(max-width:900px)");

  if (isFetching) return "Loading...";

  return (
    <>
      <Typography
        variant="h4"
        style={{ color: "white" }}
        sx={{ mb: 5, ml: "6%", mt: 12 }}
      >
        Global Crypto Stats
      </Typography>
      <Grid container spacing={4} sx={{ ml: isMobile ? -2 : "10%" }}>
        <Grid item md={6} sm={6}>
          <Typography variant="body1" style={{ color: "white" }}>
            Total Cryptocurrencies
          </Typography>
          <Typography variant="h5" fontFamily={" 'Audiowide', cursive"}>
            <CountUp start={0} end={globalStats.total} separator=" "></CountUp>
          </Typography>
        </Grid>
        <Grid item md={6} sm={6}>
          <Typography variant="body1" style={{ color: "white" }}>
            Total Exchanges
          </Typography>
          <Typography variant="h5" fontFamily={" 'Audiowide', cursive"}>
            <CountUp
              start={0}
              end={millify(globalStats.totalExchanges)}
              separator=" "
            ></CountUp>
          </Typography>
        </Grid>
        <Grid item md={6} sm={6}>
          <Typography variant="body1" style={{ color: "white" }}>
            Total Market Cap
          </Typography>
          <Typography variant="h5" fontFamily={" 'Audiowide', cursive"}>
            <CountUp
              start={0}
              end={globalStats.totalMarketCap}
              separator=" "
            ></CountUp>
          </Typography>
        </Grid>
        <Grid item md={6} sm={6}>
          <Typography variant="body1" style={{ color: "white" }}>
            Total 24h Volume
          </Typography>
          <Typography variant="h5" fontFamily={" 'Audiowide', cursive"}>
            <CountUp
              start={0}
              end={globalStats.total24hVolume}
              separator=" "
            ></CountUp>
          </Typography>
        </Grid>
        <Grid item md={6} sm={6}>
          <Typography variant="body1" style={{ color: "white" }}>
            Total Markets
          </Typography>
          <Typography variant="h5" fontFamily={" 'Audiowide', cursive"}>
            <CountUp
              start={0}
              end={globalStats.totalMarkets}
              separator=" "
            ></CountUp>
          </Typography>
        </Grid>
      </Grid>

      {isDesktop ? (
        <>
          <Box display="flex" justifyContent="space-between" sx={{ margin: 3 }}>
            <Typography variant="h4" sx={{ color: "white", ml: "4%" }}>
              Top 12 Cryptocurrencies in the world
            </Typography>
            <Typography variant="h6">
              <Link
                to="/cryptocurrencies"
                style={{
                  textDecoration: "none",
                  color: "#5a0278",
                  marginRight: 35
                }}
              >
                Show more
              </Link>
            </Typography>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ mt: 4, ml: "5%", mb: 3 }}>
            <Typography
              variant="h4"
              sx={{ color: "white", fontSize: "1.8rem" }}
            >
              Top 12 Cryptocurrencies
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <Typography
                variant="h4"
                sx={{ color: "white", fontSize: "1.8rem" }}
              >
                in the world
              </Typography>
              <Chip
                sx={{ mr: "5%" }}
                label={
                  <Typography variant="body2">
                    <Link
                      to="/news"
                      style={{
                        textDecoration: "none",
                        color: "#5a0278"
                      }}
                    >
                      Show more
                    </Link>
                  </Typography>
                }
              />
            </Box>
          </Box>
        </>
      )}

      <Cryptocurrencies simplified />

      <Box display="flex" sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h4"
          sx={{ color: "white", ml: "5%", fontSize: isMobile && "1.8rem" }}
        >
          Lates Crypto News
        </Typography>
        {isDesktop ? (
          <Typography variant="h6" sx={{ mr: "2%" }}>
            <Link
              to="/news"
              style={{
                textDecoration: "none",
                color: "#5a0278",
                marginRight: 35
              }}
            >
              Show more
            </Link>
          </Typography>
        ) : (
          <Chip
            sx={{ mr: "5%", mt: 1 }}
            label={
              <Typography variant="body2">
                <Link
                  to="/news"
                  style={{
                    textDecoration: "none",
                    color: "#5a0278"
                  }}
                >
                  Show more
                </Link>
              </Typography>
            }
          />
        )}
      </Box>
      <News simplified />
    </>
  );
};

export default Homepage;
