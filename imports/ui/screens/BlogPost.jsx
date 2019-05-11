import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import grey from "@material-ui/core/colors/grey";

import { withTracker } from "meteor/react-meteor-data";

const styles = theme => ({
  themain: {
    backgroundColor: grey[400]
  },
  content: {
    width: "80%",
    minHeight: "78vh",
    margin: "0 auto",
    padding: 16,

    backgroundColor: "#f6f6f6"
  },
  textField: {
    width: "40vw"
  }
});

const AdminBar = props => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "40px 24px"
    }}
  >
    <Typography
      variant="h5"
      bold="true"
      align="right"
      style={{
        margin: "0px 24px"
      }}
    >
      <Button
        onClick={props.handleConfirm}
        style={{
          textDecoration: "none",
          color: "#060"
        }}
      >
        CONFIRM
      </Button>
    </Typography>

    <Typography
      variant="h5"
      bold="true"
      align="right"
      style={{
        margin: "0px 24px"
      }}
    >
      <Button
        onClick={props.handleCancel}
        style={{
          textDecoration: "none",
          color: "#600"
        }}
      >
        CANCEL
      </Button>
    </Typography>
  </div>
);

class BlogPost extends React.Component {
  state = {
    editing: false,
    newPost: false,
    fetchFinished: false
  };

  componentDidMount() {
    document.title = "Blog Post - Admin - PrivateBlog";
    const { currentUser, location } = this.props;

    const postId = location.pathname.split("/").pop(-1);
    this.setState({ postId });

    const checkingIfAdmin =
      currentUser && currentUser.profile && currentUser.profile.admin;
    if (checkingIfAdmin) this.setState({ checkingIfAdmin });

    const params = location.state;
    if (params) {
      const { editing, newPost } = params;
      if (editing) {
        this.setState({ editing: true });
      }
      if (newPost) {
        this.setState({ newPost: true });
      }
    }

    Meteor.call("posts.apost", postId, (err, res) => {
      if (err) {
        console.log(err);
        return;
      }

      this.setState({
        title: res.title,
        description: res.description,
        tfTitle: res.title,
        tfDescription: res.description,
        fetchFinished: true
      });
    });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleConfirm = () => {
    const { tfTitle, tfDescription, postId } = this.state;
    const { history } = this.props;

    Meteor.call("posts.update", postId, tfTitle, tfDescription, function(
      err,
      res
    ) {
      if (err) {
        console.log(err);
        return;
      }
      history.push("/blog");
    });
  };
  handleCancel = () => {
    if (this.state.newPost) {
      Meteor.call("posts.remove", this.state.postId, function(err, res) {
        if (err) {
          console.log(err);
          return;
        }
      });
    }
    this.props.history.goBack();
  };

  render() {
    const { classes } = this.props;

    if (!this.state.fetchFinished) {
      return (
        <main className={classes.themain}>
          <div className={classes.content}>
            <p>Loading...</p>
          </div>
        </main>
      );
    }

    return (
      <main className={classes.themain}>
        <div className={classes.content}>
          {(this.state.editing || this.state.newPost) && (
            <AdminBar
              handleConfirm={this.handleConfirm.bind(this)}
              handleCancel={this.handleCancel.bind(this)}
            />
          )}

          <Grid container spacing={24} justify="center">
            <form noValidate autoComplete="off">
              <Grid item xs={12}>
                {this.state.editing || this.state.newPost ? (
                  <div>
                    <Typography variant="h6">Title</Typography>
                    <TextField
                      id="adminEditTitle"
                      onChange={this.handleChange("tfTitle")}
                      defaultValue={this.state.editing ? this.state.title : ""}
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                  </div>
                ) : (
                  <Typography
                    component="h4"
                    variant="h4"
                    style={{ margin: "20px 40px" }}
                  >
                    {this.state.title}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                {this.state.editing || this.state.newPost ? (
                  <div>
                    <Typography variant="h6">Description</Typography>
                    <TextField
                      id="adminEditDescription"
                      onChange={this.handleChange("tfDescription")}
                      className={classes.textField}
                      defaultValue={
                        this.state.editing ? this.state.description : ""
                      }
                      multiline
                      margin="normal"
                      variant="filled"
                    />
                  </div>
                ) : (
                  <Typography
                    component="p"
                    variant="h5"
                    align="justify"
                    style={{ margin: "20px 80px" }}
                  >
                    {this.state.description}
                  </Typography>
                )}
              </Grid>
            </form>
          </Grid>
        </div>
      </main>
    );
  }
}

BlogPost.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  withTracker(props => {
    return {
      currentUser: Meteor.user()
    };
  })(BlogPost)
);
