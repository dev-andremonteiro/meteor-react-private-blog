import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

const styles = theme => ({
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.grey[200]
  },

  wraper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.grey[50],
    padding: `${theme.spacing.unit * 6}px`,
    borderRadius: theme.spacing.unit,
    width: "450px"
  }
});

class NotFoundPage extends React.Component {
  componentDidMount() {
    document.title = "Page not found";
  }

  render() {
    const { classes } = this.props;

    return (
      <main style={{ height: "78vh" }}>
        <div className={classes.content}>
          <div className={classes.wraper}>
            <Typography component="h2" bold="true" variant="h5" color="inherit">
              404 - Page Not Found
            </Typography>

            <Typography component="p" color="inherit" style={{ margin: 20 }}>
              We&#39;re unable to find that page.
            </Typography>
            <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
              Go to the Home Page
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

NotFoundPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFoundPage);
