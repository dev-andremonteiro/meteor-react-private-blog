import React from "react";

import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

const styles = theme => ({
  appBar: {
    position: "relative",
    height: "10vh"
  },
  toolbarMain: {
    backgroundColor: theme.palette.common.white
  },
  toolbarTitle: {
    padding: 20
  }
});

class NavAuthBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbarMain}>
          <div style={{ flex: 1 }}>
            <Typography
              component="h2"
              variant="h3"
              color="primary"
              align="center"
              className={classes.toolbarTitle}
            >
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#2c3e50"
                }}
              >
                PrivateBlog
              </Link>
            </Typography>
          </div>
          <Link to="/login">
            <Button variant="outlined" size="small">
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

NavAuthBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavAuthBar);
