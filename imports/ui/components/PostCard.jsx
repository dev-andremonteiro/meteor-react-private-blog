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
  handleEditPost = () => {
    this.props.history.push(`/blog/${this.props.postId}`, {
      editing: true
    });
  };

  handleCardClick = () => {
    this.props.history.push(`/blog/${this.props.postId}`);
  };

  handleDeletePost = () => {
    Meteor.call("posts.remove", this.props.postId, function(err, res) {
      if (err) {
        console.log(err);
        return;
      }
    });
  };

  render() {
    const { classes, currentUser, title, description, username } = this.props;

    const checkingIfAdmin =
      currentUser && currentUser.profile && currentUser.profile.admin;

    return (
      <Card className={classes.card}>
        {checkingIfAdmin && (
          <CardActions>
            <IconButton
              aria-label="Edit Post"
              onClick={this.handleEditPost.bind(this)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="Delete Post"
              onClick={this.handleDeletePost.bind(this)}
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}

        <CardHeader
          avatar={<Avatar aria-label="Recipe" className={classes.avatar} />}
          title={username}
        />
        <CardActionArea onClick={this.handleCardClick.bind(this)}>
          <CardContent>
            <Typography variant="h5" style={{ marginBottom: 24 }}>
              {title}
            </Typography>
            <Typography>{description.slice(0, 300)}</Typography>
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
