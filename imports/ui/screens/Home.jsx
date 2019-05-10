import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { Meteor } from "meteor/meteor";
import { Redirect } from "react-router-dom";

const styles = theme => ({
  content: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: `${theme.spacing.unit * 6}px`,
    backgroundColor: theme.palette.grey[400],
    backgroundImage: "url(/background.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: theme.palette.common.white
  }
});

const shadow = {
  zIndex: 1,
  textShadow:
    "0px 1.5px 0.5px rgba(0,0,0,0.1),1px 2px 0.5px rgba(0,0,0,0.05),-1px 2px 0.5px rgba(0,0,0,0.05)"
};

class Home extends React.Component {
  componentDidMount() {
    document.title = "Home - PrivateBlog";
  }

  render() {
    const { classes } = this.props;

    return (
      <main style={{ height: "78vh" }}>
        <div className={classes.content}>
          <Typography
            style={shadow}
            component="h1"
            variant="h3"
            color="inherit"
            gutterBottom
          >
            Exclusive content
          </Typography>
          <Typography style={shadow} variant="h5" color="inherit" paragraph>
            Curated posts of the best influencers and fortune 100&#39;s. This is
            the platform that connects you with the best personalities of the
            world.
          </Typography>
          <div
            style={{
              position: "absolute",
              top: "70%",
              left: 0,
              height: "30%",
              width: "100%",
              background: "linear-gradient(to bottom , transparent, #000)"
            }}
          />
        </div>
      </main>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
