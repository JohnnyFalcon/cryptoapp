import { AppBar, Toolbar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const AppBarStyled = styled(AppBar)({
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  marginBottom: 30,
  opacity: 0.98
});
const DivMenuIcon = styled("div")({
  padding: (0, 6),
  height: "50%",
  pointerEvents: "none",
  display: "flex"
});

const LinkMobile = styled(Link)({
  marginLeft: 5,
  textDecoration: "none",
  fontSize: "14px",
  position: "relative",
  color: "black",
  textTransform: "uppercase",
  fontWeight: 600,
  fontFamily: "Montserrat"
});

const LinkStyledCc = styled(Link)({
  textDecoration: "none",
  marginLeft: 2,
  marginRight: 45,

  fontSize: "14px",

  color: "black",
  textTransform: "uppercase",
  fontWeight: 600,
  fontFamily: "Montserrat",

  display: "inline-block",
  position: "relative",
  "&::after": {
    /*color: #2ae0bc;*/
    content: '""',
    position: "absolute",
    width: "120%",
    transform: "scaleX(0)",
    height: "2px",
    bottom: -15,
    left: -27,
    backgroundColor: "#FFD700",
    transformOrigin: "bottom right",
    transition: `transform ${0.25}s ease-out`
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left"
  }
});

const LinkStyledHo = styled(Link)({
  textDecoration: "none",
  marginLeft: 5,
  marginRight: 45,

  fontSize: "14px",
  position: "relative",
  color: "black",
  textTransform: "uppercase",
  fontWeight: 600,
  fontFamily: "Montserrat",

  display: "inline-block",
  "&::after": {
    /*color: #2ae0bc;*/
    content: '""',
    position: "absolute",
    width: "170%",
    transform: "scaleX(0)",
    height: "2px",
    bottom: -15,
    left: -27,
    backgroundColor: "#FFD700",
    transformOrigin: "bottom right",
    transition: `transform ${0.25}s ease-out`
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left"
  }
});

const LinkStyledNw = styled(Link)({
  textDecoration: "none",
  marginLeft: 5,
  marginRight: 45,

  fontSize: "14px",
  position: "relative",
  color: "black",
  textTransform: "uppercase",
  fontWeight: 600,
  fontFamily: "Montserrat",

  display: "inline-block",

  "&::after": {
    /*color: #2ae0bc;*/
    content: '""',
    position: "absolute",
    width: "175%",
    transform: "scaleX(0)",
    height: "2px",
    bottom: -15,
    left: -27,
    backgroundColor: "#FFD700",
    transformOrigin: "bottom right",
    transition: `transform ${0.25}s ease-out`
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left"
  }
});

const BoxStyled = styled(Box)({
  "&:active": {
    transform: "translateY(-1px)"
  }
});

export {
  AppBarStyled,
  DivMenuIcon,
  LinkStyledCc,
  BoxStyled,
  LinkStyledHo,
  LinkStyledNw,
  LinkMobile
};
