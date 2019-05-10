import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import Avatar from "@material-ui/core/Avatar";

import grey from "@material-ui/core/colors/grey";

import { withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    backgroundColor: grey[500]
  }
});

class PostCard extends React.Component {
  handleEditPost = history => {
    history.push("/blog/asd123");
  };

  handleDeletePost = history => {};

  render() {
    const { classes, history, currentUser } = this.props;

    const checkingIfAdmin =
      currentUser && currentUser.profile && currentUser.profile.admin;

    return (
      <Card className={classes.card}>
        {checkingIfAdmin && (
          <CardActions>
            <IconButton
              aria-label="Edit Post"
              onClick={this.handleEditPost.bind(this, history)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="Delete Post"
              onClick={this.handleDeletePost.bind(this, history)}
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}

        <CardHeader
          avatar={<Avatar aria-label="Recipe" className={classes.avatar} />}
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardActionArea onClick={() => history.push("/blog/asd123")}>
          <CardContent>
            <Typography variant="h5" style={{ marginBottom: 20 }}>
              Interesting Title
            </Typography>
            <Typography>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

PostCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  withTracker(props => {
    return {
      currentUser: Meteor.user()
    };
  })(withRouter(PostCard))
);
