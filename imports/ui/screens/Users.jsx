import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import PersonIcon from "@material-ui/icons/PersonPin";

import grey from "@material-ui/core/colors/grey";

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
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  }
});

class Users extends React.Component {
  componentDidMount() {
    document.title = "Users - Admin - PrivateBlog";
  }

  generate(element) {
    return [0, 1, 2].map(value =>
      React.cloneElement(element, {
        key: value
      })
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.themain}>
        <div className={classes.content}>
          <Grid container spacing={16} style={{ justifyContent: "center" }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" style={{ margin: "40px 24px" }}>
                Website users
              </Typography>
              <div className={classes.demo}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <div style={{ height: 30, width: 30 }} />
                    </ListItemIcon>
                    <ListItemText primary="Id" />
                    <ListItemText primary="Username" />
                  </ListItem>

                  {this.generate(
                    <ListItem>
                      <ListItemIcon>
                        <PersonIcon />
                      </ListItemIcon>
                      <ListItemText secondary="123456" />
                      <ListItemText secondary="Testing" />
                    </ListItem>
                  )}
                </List>
              </div>
            </Grid>
          </Grid>
        </div>
      </main>
    );
  }
}

Users.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Users);
