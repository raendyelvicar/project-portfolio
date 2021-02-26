import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Poppins"', "sans-serif"].join(","),

    h1: {
      fontSize: "5rem",
      fontWeight: "700",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: "600",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "600",
    },
    p: {
      fontSize: ".938rem",
      fontWeight: "500",
    },
    secondary: {
      fontSize: ".9rem",
    },
  },
});

export default theme;
