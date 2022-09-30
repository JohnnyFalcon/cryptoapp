import React, { useRef } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Typography, Grid, Box, Chip, useMediaQuery } from "@mui/material";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import CountUp from "react-countup";
import Cryptocurrencies from "../Crypto/Cryptocurrencies";
import News from "../News/News";

const Homepage = ({ topPageCrypto, topPageNw }) => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log(data);
  const top = useRef();
  const isDesktop = useMediaQuery("(min-width:600px)");
  const is900 = useMediaQuery("(min-width:900px)");
  const handleTopPageCrypto = () => {
    topPageCrypto.current.scrollIntoView();
  };
  const handleTopPageNw = () => {
    topPageNw.current.scrollIntoView();
  };
  if (isFetching) return "Loading...";
  // nothing
  return (
    <>
      <Typography
        variant="h4"
        style={{ color: "white" }}
        sx={{ mb: 5, ml: "6%", mt: 12 }}
      >
        Global Crypto Stats
      </Typography>
      <Grid container spacing={4} sx={{ ml: is900 ? "10%" : "3%" }}>
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
                onClick={handleTopPageCrypto}
              >
                Show more
              </Link>
            </Typography>
          </Box>
        </>
      ) : (
        <>
          <Grid container sx={{ mt: 4, ml: "5%", mb: 3 }}>
            <Grid item xs={6}>
              <Typography variant="h4" sx={{ color: "white", ml: "4%" }}>
                Top 12
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Chip
                sx={{ ml: "25%" }}
                label={
                  <Typography variant="h6">
                    <Link
                      to="/cryptocurrencies"
                      style={{
                        textDecoration: "none",
                        color: "#5a0278",
                        marginRight: 1
                      }}
                      onClick={handleTopPageCrypto}
                    >
                      Show more
                    </Link>
                  </Typography>
                }
              />
            </Grid>

            <Grid item xs={6}>
              <Typography variant="h4" sx={{ color: "white", ml: "4%" }}>
                Cryptocurrencies in the world
              </Typography>
            </Grid>
          </Grid>
        </>
      )}

      <Cryptocurrencies simplified />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" sx={{ color: "white", ml: "5%" }}>
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
              onClick={handleTopPageNw}
            >
              Show more
            </Link>
          </Typography>
        ) : (
          <Chip
            label={
              <Typography variant="h6">
                <Link
                  to="/news"
                  style={{
                    textDecoration: "none",
                    color: "#5a0278"
                  }}
                  onClick={handleTopPageNw}
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