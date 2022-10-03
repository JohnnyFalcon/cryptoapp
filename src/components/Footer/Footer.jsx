import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div style={{ padding: 10 }}>
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
  );
};

export default Footer;
