import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
});

Meteor.publish("allUsers", function() {
  return Meteor.users.find();
});
