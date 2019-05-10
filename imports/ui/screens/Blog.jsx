import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PostCard from "../components/PostCard";

import { Link } from "react-router-dom";

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

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.themain}>
        <div className={classes.content}>
          <Typography
            component="h4"
            variant="h4"
            style={{ margin: "40px 24px" }}
          >
            Blog Posts
          </Typography>

          <Typography
            component="h5"
            variant="h5"
            align="center"
            style={{ margin: "40px 0px" }}
          >
            <Link
              to="/admin/users"
              style={{
                textDecoration: "none",
                color: "#2c3e50"
              }}
            >
              Admin
            </Link>
          </Typography>

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

export default withStyles(styles)(Blog);
