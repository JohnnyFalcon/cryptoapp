import React, { useContext, useEffect } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Typography, Grid, Divider, useMediaQuery, Box } from "@mui/material";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { NavigationContext } from "./contexts/NavigationContext";
const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;
  const isDesktop = useMediaQuery("(min-width:600px)");
  const volume = data?.data?.coin["24hVolume"];
  const { setSelectedCrypto } = useContext(NavigationContext);

  useEffect(() => {
    setSelectedCrypto(coinId);
  }, [coinId, setSelectedCrypto]);

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <MonetizationOnOutlinedIcon />
    },
    {
      title: "Rank",
      value: cryptoDetails?.rank,
      icon: <MonetizationOnOutlinedIcon />
    },
    {
      title: "24h Volume",
      value: `$ ${volume && millify(volume)}`,
      icon: <MonetizationOnOutlinedIcon />
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <MonetizationOnOutlinedIcon />
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <MonetizationOnOutlinedIcon />
    }
  ];
  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <MonetizationOnOutlinedIcon />
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MonetizationOnOutlinedIcon />
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <MonetizationOnOutlinedIcon />
      ) : (
        <MonetizationOnOutlinedIcon />
      ),
      icon: <MonetizationOnOutlinedIcon />
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <MonetizationOnOutlinedIcon />
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <MonetizationOnOutlinedIcon />
    }
  ];

  if (isFetching) return "Loading...";

  return (
    <>
      <Box
        textAlign="center"
        sx={{ mt: isDesktop ? 15 : 10, ml: "4%", mr: "4%" }}
      >
        <Typography variant="h3" gutterBottom>
          {data?.data?.coin.name} ({data?.data?.coin.symbol}) Price
        </Typography>
        <Typography variant="subtilte2" gutterBottom>
          {data?.data?.coin.name} live price in US dollars. View value
          statistics, market cap and supply.
        </Typography>
        <Box sx={{ paddingLeft: "10%", paddingRight: "10%" }}>
          <Divider variant="middle" />
        </Box>
      </Box>

      <Grid
        container
        spacing={isDesktop && 7}
        sx={{
          mt: 5,
          paddingRight: "7%",
          paddingLeft: "7%"
        }}
      >
        <Grid item xs={12} sm={12} lg={6} sx={{ mb: !isDesktop && 6 }}>
          <Box>
            <Grid item xs={12} sm={12} lg={12}>
              <Typography variant="h4" gutterBottom>
                {data?.data?.coin.name} Value Statistics
              </Typography>
              <Typography variant="body2" gutterBottom>
                An overview showing the stats of {data?.data?.coin.name}
              </Typography>
            </Grid>
            {stats.map(({ icon, title, value }) => (
              <>
                <Grid
                  key={title}
                  item
                  xs={12}
                  sm={12}
                  lg={12}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Typography variant="body1">
                    {icon} {title}
                  </Typography>
                  <Typography variant="body1" style={{ fontWeight: 700 }}>
                    {value}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                  <Divider variant="middle" />
                </Grid>
              </>
            ))}
          </Box>
        </Grid>
        {isDesktop && (
          <>
            <Grid item xs={12} sm={12} lg={6}></Grid>
            <Grid item xs={12} sm={12} lg={6}></Grid>
          </>
        )}

        <Grid
          item
          xs={12}
          sm={12}
          lg={6}
          sx={{ maxWidth: 500, mb: !isDesktop && 6 }}
        >
          <Box>
            <Typography variant="h4" gutterBottom>
              Other Statistics
            </Typography>
            <Typography variant="body2" gutterBottom>
              An overview showing the stats of all cryptocurrencies
            </Typography>
          </Box>
          <Box>
            {genericStats.map(({ icon, title, value }) => (
              <>
                <Grid
                  key={title}
                  item
                  xs={12}
                  sm={12}
                  lg={12}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Typography variant="body1">
                    {icon} {title}
                  </Typography>
                  <Typography variant="body1" style={{ fontWeight: 700 }}>
                    {value}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                  <Divider variant="middle" />
                </Grid>
              </>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            What is {data?.data?.coin.name}
          </Typography>
          <Typography variant="h6">
            {HTMLReactParser(String(data?.data?.coin.description))}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CryptoDetails;
