import React from "react";
import PropTypes from "prop-types";
import MUILink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  footer: {
    height: "12vh",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 2
  }
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          PrivateBlog
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Developed by{" "}
          <MUILink
            target="_blank"
            rel="noopener noreferrer"
            href="http://github.com/dev-andremonteiro"
          >
            André Monteiro
          </MUILink>
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          color="textSecondary"
          component="p"
        >
          2019
        </Typography>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
