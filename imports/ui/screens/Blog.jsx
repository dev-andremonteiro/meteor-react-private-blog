import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  themain: {
    minHeight: "78vh",
    backgroundColor: theme.palette.grey[400]
  },
  content: {
    flex: 1,
    width: "80%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
          <h1>YAY!</h1>
          <p>nai!</p>
          <h1>YAY!</h1>
          <p>nai!</p>
          <h1>YAY!</h1>
          <p>nai!</p>
          <h1>YAY!</h1>
          <p>nai!</p>
          <h1>YAY!</h1>
          <p>nai!</p>
          <h1>YAY!</h1>
          <p>nai!</p>
          <h1>YAY!</h1>
          <p>nai!</p>
          <h1>YAY!</h1>
          <p>nai!</p>
        </div>
      </main>
    );
  }
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Blog);
