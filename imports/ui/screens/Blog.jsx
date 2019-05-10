import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PostCard from "../components/PostCard";
import { Button } from "@material-ui/core";

import { Link, withRouter } from "react-router-dom";

import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

const styles = theme => ({
  themain: {
    backgroundColor: theme.palette.grey[400]
  },
  content: {
    width: "80%",
    minHeight: "78vh",
    margin: "0 auto",
    padding: 16,

    backgroundColor: "#f6f6f6"
  }
});

class Blog extends React.Component {
  componentDidMount() {
    document.title = "Blog Posts - PrivateBlog";
  }

  handleNewPost = history => {
    history.push("/blog/asd123");
  };

  render() {
    const { classes, currentUser, history } = this.props;

    const checkingIfAdmin =
      currentUser && currentUser.profile && currentUser.profile.admin;

    return (
      <main className={classes.themain}>
        <div className={classes.content}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "40px 24px"
            }}
          >
            <Typography component="h4" variant="h4">
              Blog Posts
            </Typography>

            {checkingIfAdmin && (
              <div style={{ display: "flex" }}>
                <Typography
                  variant="h5"
                  bold="true"
                  align="right"
                  style={{
                    margin: "0px 24px"
                  }}
                >
                  <Button
                    onClick={this.handleNewPost.bind(this, history)}
                    style={{
                      textDecoration: "none",
                      color: "#060"
                    }}
                  >
                    New Blog Post
                  </Button>
                </Typography>
                <Typography variant="h5" bold="true" align="right">
                  <Link
                    to="/admin/users"
                    style={{
                      textDecoration: "none",
                      color: "#444"
                    }}
                  >
                    Manage Users
                  </Link>
                </Typography>
              </div>
            )}
          </div>

          <Grid container spacing={16}>
            {[1, 2, 3, 4, 5, 6].map(value => (
              <Grid key={value} item lg={4} md={6} sm={12} xs={12}>
                <Grid container style={{ justifyContent: "center" }}>
                  <PostCard />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    );
  }
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  withTracker(props => {
    return {
      currentUser: Meteor.user()
    };
  })(withRouter(Blog))
);
