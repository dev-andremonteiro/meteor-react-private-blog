import React from "react";

import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { Meteor } from "meteor/meteor";

import { Link, withRouter } from "react-router-dom";
import { Session } from "meteor/session";
import { withTracker } from "meteor/react-meteor-data";

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
  flowControl = false;

  handleLogout = history => {
    Session.set("admin", null);
    Meteor.logout(() => {
      history.push("/");
    });
  };

  render() {
    const { classes, history, currentUser } = this.props;

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

          {this.props.loggedIn ? (
            <div style={{ display: "flex" }}>
              <Typography
                variant="h6"
                color="primary"
                style={{ padding: "0px 20px" }}
              >
                {currentUser ? `${currentUser.username}` : ""}
              </Typography>
              <Button
                variant="contained"
                size="small"
                onClick={this.handleLogout.bind(this, history)}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button variant="outlined" size="small">
                Login
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

NavAuthBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  withTracker(props => {
    return {
      loggedIn: !!Meteor.userId(),
      currentUser: Meteor.user()
    };
  })(withRouter(NavAuthBar))
);
