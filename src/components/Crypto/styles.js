import { Card, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const LinkStyled = styled(Link)({
  textDecoration: "none"
});
const CardStyled = styled(Card)({
  borderRadius: 10
});
const TextFieldStyled = styled(TextField)({
  "& label.Mui-focused": {
    color: "white"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white"
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "white"
    }
  }
});
export { LinkStyled, CardStyled, TextFieldStyled };
