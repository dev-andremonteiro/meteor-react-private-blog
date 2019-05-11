import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";
import shortid from "shortid";

export const Posts = new Mongo.Collection("posts");

if (Meteor.isServer) {
  Meteor.publish("posts", function() {
    return Posts.find();
  });
}

Meteor.methods({
  "posts.insert"() {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    const newID = shortid.generate();

    return Posts.insert({
      _id: newID,
      title: "",
      description: "",
      createdAt: new Date(),
      username: Meteor.users.findOne(this.userId).username
    });
  },
  "posts.update"(_id, title, description) {
    check(title, String);
    check(description, String);

    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    Posts.update(_id, {
      $set: { title, description }
    });
  },
  "posts.remove"(_id) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    Posts.remove(_id);
  },
  "posts.apost"(_id) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    return Posts.findOne({ _id });
  }
});
