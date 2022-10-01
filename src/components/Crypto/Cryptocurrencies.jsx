import React, { useState, useEffect,  useContext } from "react";
import millify from "millify";

import { useGetCryptosQuery } from "../../services/cryptoApi";
import {
  CardActionArea,
  
  Grid,
  
  CardContent,
  Typography,
  Avatar,
  Box,
  Divider,
  CircularProgress,
  useMediaQuery
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { LinkStyled, CardStyled, TextFieldStyled } from "./styles";
import { NavigationContext } from "../contexts/NavigationContext";
const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 12 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const { selected } = useContext(NavigationContext);
 
  const isDesktop = useMediaQuery("(min-width:600px)");
  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching)
    return (
      <CircularProgress
        size={100}
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white"
        }}
      />
    );
  return (
    <>
      {!simplified &&
        ({
          /* <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            mt: 15,
            ml: "50%",
            transform: "translate(-50%)",
            mb: 5
          }}
          noValidate
          autoComplete="off"
        >
          <TextFieldStyled
            fullWidth
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon edge="start" />
              </InputAdornment>
            }
          />
        </Box> */
        },
        (
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              width: isDesktop ? 500 : 300,
              mt: 13,
              ml: "50%",
              transform: "translate(-50%)",
              mb: 5
            }}
            noValidate
            autoComplete="off"
          >
            <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextFieldStyled
              fullWidth
              label="Search Cryptocurrency"
              variant="standard"
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />
          </Box>
        ))}

      <Grid
        container
        sx={{
          paddingLeft: isDesktop ? 6 : 2,
          paddingRight: isDesktop ? 6 : 2,
          mt: selected === "Crypto" && 5,
          mb: 5
        }}
      >
        {cryptos?.map((currency) => (
          <Grid item xs={6} sm={6} lg={3} key={currency.uuid}>
            <LinkStyled to={`/crypto/${currency.uuid}`}>
              <CardStyled style={{ margin: isDesktop ? 10 : 5 }}>
                <CardActionArea>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    sx={{ margin: 2 }}
                  >
                    <Typography gutterBottom variant="h5">
                      {`${currency.rank}. ${currency.name}`}
                    </Typography>
                    <Avatar src={`${currency.iconUrl}`} />
                  </Box>
                  <Divider variant="middle" />
                  <CardContent>
                    <Typography variant="body1" gutterBottom>
                      Price: {millify(currency.price)}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Market Cup: {millify(currency.marketCap)}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Daily Change: {millify(currency.change)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </CardStyled>
            </LinkStyled>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Cryptocurrencies;
