import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

const styles = theme => ({
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.grey[400]
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
  },

  formControl: {
    marginTop: theme.spacing.unit * 4,
    display: "flex",
    flexDirection: "column",
    width: "90%"
  },

  button: {
    alignSelf: "center",
    marginTop: theme.spacing.unit * 4
  }
});

class AuthSignup extends React.Component {
  componentDidMount() {
    document.title = "Signup - PrivateBlog";
  }

  state = {
    name: "Composed TextField"
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <main style={{ height: "78vh" }}>
        <div className={classes.content}>
          <div className={classes.wraper}>
            <Typography component="h3" bold="true" variant="h5" color="inherit">
              Create your new account
            </Typography>
            <form className={classes.formControl} noValidate autoComplete="off">
              <TextField
                id="outlined-with-placeholder"
                label="Username"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />

              <TextField
                id="outlined-with-placeholder"
                label="Password"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                type="password"
              />

              <TextField
                id="outlined-with-placeholder"
                label="Repeat Password"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                type="password"
              />
            </form>

            <Link to="/blog" className={classes.button}>
              <Button
                variant="outlined"
                color="primary"
                bold="true"
                size="medium"
              >
                SIGN UP
              </Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }
}
AuthSignup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AuthSignup);
