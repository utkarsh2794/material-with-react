import { createTheme } from "@material-ui/core/styles";

const arcBlue = "#007289";
const arcOrange = "#FFBA60";

export default createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    h3: "300",
    tab: {
        fontFamily : "Roboto"
    },
    estimate: {
        fontFamily: "Pacifico",
        fontSize: "1rem",
        textTransform: "none",
        color: "white"
    }
  },
});
