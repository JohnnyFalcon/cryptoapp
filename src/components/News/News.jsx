import React, { useState, useRef } from "react";
import {
  Typography,
  Grid,
  Avatar,
  Card,
  CircularProgress,
  CardActionArea,
  CardContent,
  Box,
  Divider,
  Select,
  MenuItem,
  FormControl,
  OutlinedInput
} from "@mui/material";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { CardStyled, SelectStyled } from "./styles";
import moment from "moment";
const News = ({ simplified, selected, setTopPageNw }) => {
  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 14
  });
  const { data } = useGetCryptosQuery(100);
  const top = useRef();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };
  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setNewsCategory(value);
  };

  if (!cryptoNews?.value)
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
      <Grid
        container
        sx={{
          paddingLeft: "5%",
          paddingRight: "5%",
          paddingTop: selected === "/news" && 13,
          mt: 2
        }}
      >
        {!simplified && (
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            sx={{ paddingLeft: "8%", paddingTop: 3, mb: 4 }}
          >
            <FormControl sx={{ width: 300 }} ref={setTopPageNw(top)}>
              <Select
                sx={{ color: "white" }}
                displayEmpty
                value={newsCategory}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(a) => {
                  if (a === "Cryptocurrency") {
                    return <em>Select a Crypto</em>;
                  }

                  return a;
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>Select a Crypto</em>
                </MenuItem>
                <MenuItem value="Cryptocurrency">Cryptocurrency News</MenuItem>
                {data?.data?.coins.map((coin, i) => (
                  <MenuItem key={i} value={coin.name}>
                    {coin.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        )}
        {cryptoNews.value.map((news, i) => (
          <Grid item xs={12} sm={6} lg={4} key={i}>
            <a
              href={news.url}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <CardStyled>
                <CardActionArea>
                  <CardContent>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      sx={{ mb: 2 }}
                    >
                      <Typography variant="h5">{news.name} </Typography>
                      <img
                        style={{ maxWidth: "200px", maxHeight: "100px" }}
                        src={news?.image?.thumbnail?.contentUrl || demoImage}
                        alt="news"
                      />
                    </Box>
                    <Divider variant="middle" />
                    <Typography
                      variant="body1"
                      sx={{ color: "#04255c", mb: 2, mt: 1 }}
                    >
                      {news.description > 100
                        ? `${news.description.substring(0, 100)} ...`
                        : news.description}
                    </Typography>
                    <Box display="flex" justifyContent="space-between">
                      <Box display="flex">
                        <Avatar
                          src={
                            news.provider[0]?.image?.thumbnail?.contentUrl ||
                            demoImage
                          }
                          alt=""
                        />
                        <Typography
                          variant="body2"
                          sx={{ paddingTop: 1, ml: 1 }}
                        >
                          {news.provider[0]?.name}
                        </Typography>
                      </Box>
                      <Typography variant="subtitle2" sx={{ paddingTop: 1 }}>
                        {moment(news.datePublished).startOf("ss").fromNow()}
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </CardStyled>
            </a>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default News;
