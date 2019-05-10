import React, { Componet } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import Home from "../ui/screens/Home";
import AuthLogin from "../ui/screens/AuthLogin";
import AuthSignup from "../ui/screens/AuthSignup";
import Blog from "../ui/screens/Blog";
import BlogPost from "../ui/screens/BlogPost";
import Users from "../ui/screens/Users";
import NotFoundPage from "../ui/screens/NotFoundPage";

import NavAuthBar from "../ui/components/NavAuthBar";
import Footer from "../ui/components/Footer";

import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

const ElevatedRouteTracking = withTracker(props => {
  return {
    currentUser: Meteor.user()
  };
})(ElevatedRoute);

function ElevatedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (rest.currentUser) {
          // the user is logged in
          if (rest.currentUser.profile && rest.currentUser.profile.admin) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: props.location }
                }}
              />
            );
          }
        }
      }}
    />
  );
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !!Meteor.userId() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function SimpleRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !!Meteor.userId() ? (
          <Redirect
            to={{
              pathname: "/blog",
              state: { from: props.location }
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export const routes = (
  <BrowserRouter>
    <NavAuthBar />
    <Switch>
      <SimpleRoute exact path="/" component={Home} />
      <SimpleRoute exact path="/login" component={AuthLogin} />
      <SimpleRoute exact path="/signup" component={AuthSignup} />
      <PrivateRoute exact path="/blog" component={Blog} />
      <PrivateRoute path="/blog/:_id" component={BlogPost} />
      <ElevatedRouteTracking exact path="/admin/users" component={Users} />
      <Route component={NotFoundPage} />
    </Switch>

    <Footer />
  </BrowserRouter>
);
