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
import { Session } from "meteor/session";

export const routes = (
  <BrowserRouter>
    <NavAuthBar />
    <Switch>
      <SimpleRoute exact path="/" component={Home} />
      <SimpleRoute exact path="/login" component={AuthLogin} />
      <SimpleRoute exact path="/signup" component={AuthSignup} />
      <PrivateRoute exact path="/blog" component={Blog} />
      <PrivateRoute path="/blog/:_id" component={BlogPost} />
      <ElevatedRoute exact path="/admin/users" component={Users} />
      <Route component={NotFoundPage} />
    </Switch>

    <Footer />
  </BrowserRouter>
);

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

function ElevatedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        Session.get("admin") ? (
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
