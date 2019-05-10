import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";

import { Meteor } from "meteor/meteor";
import { Link, Redirect } from "react-router-dom";

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
    error: "",
    changePage: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleLogin = () => {
    if (!this.state.user || !this.state.password) {
      this.setState({
        error: "Please, provide your username and password."
      });
      return;
    }

    let username = this.state.user.trim();
    let password = this.state.password.trim();

    Meteor.loginWithPassword({ username }, password, err => {
      if (err) {
        this.setState({
          error: "Unable to login. Please, check your username and password."
        });
      } else {
        this.setState({ error: "", password: "", changePage: true });
      }
    });
  };

  render() {
    const { classes } = this.props;

    if (this.state.changePage) {
      return <Redirect push to="/blog" />;
    }

    return (
      <main style={{ height: "78vh" }}>
        <div className={classes.content}>
          <div className={classes.wraper}>
            <Typography component="h3" bold="true" variant="h5" color="inherit">
              Welcome Back!
            </Typography>
            <Typography variant="caption" style={{ color: "#F00" }}>
              {this.state.error}
            </Typography>
            <form className={classes.formControl} noValidate autoComplete="off">
              <TextField
                id="loginUsername"
                onChange={this.handleChange("user")}
                label="Username"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />

              <TextField
                id="loginPassword"
                onChange={this.handleChange("password")}
                label="Password"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                type="password"
                onKeyPress={ev => ev.key === "Enter" && this.handleLogin()}
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
            <Button
              variant="contained"
              color="primary"
              bold="true"
              size="medium"
              className={classes.button}
              onClick={this.handleLogin}
            >
              LOG IN
            </Button>
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
