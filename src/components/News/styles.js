import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const LinkStyled = styled(Link)({
  textDecoration: "none"
});
const CardStyled = styled(Card)({
  margin: 10,
  borderRadius: 10
});

export { CardStyled };
