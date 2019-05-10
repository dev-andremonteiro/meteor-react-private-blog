import React from "react";
import { routes } from "../startup/routes";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import muiTheme from "./muiTheme";

import CssBaseline from "@material-ui/core/CssBaseline";

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <React.Fragment>
          <CssBaseline />
          {routes}
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
