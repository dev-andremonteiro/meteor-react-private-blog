import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      light: "#57687c",
      main: "#2c3e50",
      dark: "#031828",
      contrastText: "#fff"
    }
  }
});

export default theme;
