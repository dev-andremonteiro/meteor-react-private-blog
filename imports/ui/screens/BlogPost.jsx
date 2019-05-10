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

class BlogPost extends React.Component {
  componentDidMount() {
    document.title = "Blog Post - PrivateBlog";
  }

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.themain}>
        <div className={classes.content}>
          <Grid container spacing={24} justify="center">
            <Grid item xs={12}>
              <Typography
                component="h4"
                variant="h4"
                style={{ margin: "20px 40px" }}
              >
                Interesting Title
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                component="p"
                variant="h5"
                align="justify"
                style={{ margin: "20px 80px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                augue est, imperdiet sed ante id, cursus pharetra felis. Quisque
                eu arcu lectus. Pellentesque id ex nunc. Phasellus tincidunt
                ultricies orci et blandit. Nam id diam ut arcu pulvinar
                efficitur quis ac velit. Suspendisse vitae sollicitudin quam,
                sed sollicitudin eros. Morbi varius interdum risus, egestas
                ultricies nisl cursus id. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Cras
                vitae tellus quis quam viverra suscipit. Proin malesuada mollis
                ullamcorper.
                <br /> Vivamus maximus mi at purus scelerisque pellentesque.
                Quisque gravida consectetur ultrices. Pellentesque erat est,
                commodo a magna id, sodales blandit leo. Cras et accumsan quam.
                In libero elit, consequat ac urna nec, scelerisque commodo
                magna. In hac habitasse platea dictumst. In lacinia tempor
                magna, sed aliquet magna laoreet et. Phasellus scelerisque
                volutpat accumsan. Mauris tempor rutrum luctus. Donec non augue
                hendrerit, laoreet lorem eget, mollis lectus. Etiam facilisis
                ipsum bibendum nisi convallis venenatis. Curabitur tellus urna,
                sodales a lectus in, iaculis euismod risus. Aliquam iaculis
                finibus tristique. Etiam id sodales orci. Suspendisse interdum
                nisi sit amet scelerisque hendrerit. Aenean sit amet luctus
                neque. Ut ut lorem non lectus mollis iaculis. Nunc varius
                pharetra diam et sollicitudin. Vivamus interdum tellus sit amet
                hendrerit fringilla. Aliquam erat volutpat. Maecenas faucibus
                purus lorem. Duis bibendum purus et nulla suscipit tempor. In ac
                urna efficitur, auctor elit eget, vestibulum ante.
                <br /> Donec elementum magna diam, non consectetur justo
                molestie vel. Ut nec risus id neque malesuada efficitur.
                Suspendisse nisl neque, imperdiet non felis non, tempor pulvinar
                arcu. Maecenas quis semper orci. Vestibulum cursus sed purus
                quis hendrerit. Duis maximus feugiat lorem, quis vestibulum odio
                feugiat vel. Vivamus faucibus tellus nec bibendum interdum.
                Nullam at finibus diam, sed laoreet est. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Aliquam ultricies pretium tincidunt. Nullam interdum
                pharetra ligula et scelerisque.
                <br /> Nullam volutpat mauris non ullamcorper ullamcorper.
                Mauris eu laoreet purus. Quisque suscipit neque nec urna aliquam
                iaculis. Phasellus sagittis, augue quis pulvinar condimentum,
                nulla turpis sagittis turpis, nec dictum mi est nec sem.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </main>
    );
  }
}

class BlogPostAdmin extends React.Component {
  state = {
    editing: false
  };

  componentDidMount() {
    document.title = "Blog Post - Admin - PrivateBlog";
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleConfirm = () => {};
  handleCancel = () => {};

  render() {
    const { classes, history } = this.props;

    return (
      <main className={classes.themain}>
        <div className={classes.content}>
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
                onClick={this.handleConfirm.bind(this, history)}
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
                onClick={this.handleCancel.bind(this, history)}
                style={{
                  textDecoration: "none",
                  color: "#600"
                }}
              >
                CANCEL
              </Button>
            </Typography>
          </div>

          <Grid container spacing={24} justify="center">
            <form noValidate autoComplete="off">
              <Grid item xs={12}>
                <Typography variant="h6">Title</Typography>
                <TextField
                  id="adminEditTitle"
                  onChange={this.handleChange("title")}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Description</Typography>
                <TextField
                  id="adminEditDescription"
                  onChange={this.handleChange("description")}
                  className={classes.textField}
                  multiline
                  margin="normal"
                  variant="filled"
                />
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

BlogPostAdmin.propTypes = {
  classes: PropTypes.object.isRequired
};

class Wraper extends React.Component {
  render() {
    const { currentUser } = this.props;

    const checkingIfAdmin =
      currentUser && currentUser.profile && currentUser.profile.admin;

    if (checkingIfAdmin) {
      return <BlogPostAdmin {...this.props} />;
    } else {
      return <BlogPost {...this.props} />;
    }
  }
}

export default withStyles(styles)(
  withTracker(props => {
    return {
      currentUser: Meteor.user()
    };
  })(Wraper)
);
