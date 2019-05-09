import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

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
    width: "450px",
    boxShadow: "0 13px 40px -13px rgba(0, 0, 0, 0.75)"
  },

  formControl: {
    marginTop: theme.spacing.unit * 4,
    display: "flex",
    flexDirection: "column",
    width: "90%"
  },

  button: {
    alignSelf: "flex-start",
    marginLeft: "5%",
    marginTop: theme.spacing.unit * 4
  }
});

class AuthLogin extends React.Component {
  componentDidMount() {
    document.title = "Login - PrivateBlog";
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
              Welcome Back!
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
              <Typography style={{ alignSelf: "flex-start" }}>
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: "blue"
                  }}
                >
                  Create an account
                </Link>
              </Typography>
            </form>
            <Link to="/blog" className={classes.button}>
              <Button
                variant="contained"
                color="primary"
                bold="true"
                size="medium"
              >
                LOG IN
              </Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }
}
AuthLogin.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AuthLogin);
