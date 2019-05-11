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

import { Posts } from "../../api/posts";

const defaultTitle = "Interesting Title";
const defaultDescription =
  "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.";

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

  handleNewPost = () => {
    const { history } = this.props;

    Meteor.call("posts.insert", function(error, result) {
      if (error) {
        console.log(error);
        return;
      }
      var theNewId = result;
      history.push(`/blog/${theNewId}`, { newPost: true });
    });
  };

  render() {
    const { classes, currentUser } = this.props;

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
                    onClick={this.handleNewPost.bind(this)}
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
            {this.props.posts.map((value, index) => {
              return (
                <Grid key={index} item lg={4} md={6} sm={12} xs={12}>
                  <Grid container style={{ justifyContent: "center" }}>
                    <PostCard
                      postId={value._id}
                      title={value.title}
                      description={value.description}
                      username={value.username}
                    />
                  </Grid>
                </Grid>
              );
            })}
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
      currentUser: Meteor.user(),
      posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch()
    };
  })(withRouter(Blog))
);
