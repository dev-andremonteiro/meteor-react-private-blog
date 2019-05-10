import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";

import Avatar from "@material-ui/core/Avatar";

import grey from "@material-ui/core/colors/grey";

import { Redirect } from "react-router-dom";

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
  state = {
    redirect: false
  };

  handleOnClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { classes } = this.props;

    if (this.state.redirect) {
      return <Redirect push to="/blog/asd123" />;
    }

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar aria-label="Recipe" className={classes.avatar} />}
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardActionArea onClick={() => this.setState({ redirect: true })}>
          <CardMedia
            className={classes.media}
            image="paella.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography component="p">
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

export default withStyles(styles)(PostCard);
