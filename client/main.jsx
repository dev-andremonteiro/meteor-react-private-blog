import React from "react";
import { Meteor } from "meteor/meteor";
import { Session } from "meteor/session";
import { render } from "react-dom";
import App from "../imports/ui/App";

Meteor.startup(() => {
  render(<App />, document.getElementById("app"));
});
