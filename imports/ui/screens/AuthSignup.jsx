import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";

import { Accounts } from "meteor/accounts-base";
import { Redirect } from "react-router-dom";

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
    error: "",
    changePage: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSignup = () => {
    if (!this.state.user || !this.state.password || !this.state.repeat) {
      this.setState({
        error: "Please, fill all the fields to create an account."
      });
      return;
    }

    let username = this.state.user.trim();
    let password = this.state.password.trim();
    let repeat = this.state.repeat.trim();

    if (password.length < 6) {
      return this.setState({
        error: "Password must be at least 6 characters long."
      });
    }

    if (password !== repeat) {
      return this.setState({ error: "Password and Repeat are not equal." });
    }

    Accounts.createUser({ username, password }, err => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({
          error: "",
          changePage: true,
          password: "",
          repeat: ""
        });
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
              Create your new account
            </Typography>
            <Typography variant="caption" style={{ color: "#F00" }}>
              {this.state.error}
            </Typography>
            <form className={classes.formControl} noValidate autoComplete="off">
              <TextField
                id="signupLogin"
                onChange={this.handleChange("user")}
                label="Username"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />

              <TextField
                id="signupPassword"
                onChange={this.handleChange("password")}
                label="Password"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                type="password"
              />

              <TextField
                id="signupRepeat"
                onChange={this.handleChange("repeat")}
                label="Repeat Password"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                type="password"
              />
            </form>

            <Button
              variant="outlined"
              color="primary"
              bold="true"
              size="medium"
              className={classes.button}
              onClick={this.handleSignup}
            >
              SIGN UP
            </Button>
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
