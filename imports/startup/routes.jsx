import React from "react";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../ui/screens/Home";
import AuthLogin from "../ui/screens/AuthLogin";
import AuthSignup from "../ui/screens/AuthSignup";
import Blog from "../ui/screens/Blog";
import BlogPost from "../ui/screens/BlogPost";
import Users from "../ui/screens/Users";
import NotFoundPage from "../ui/screens/NotFoundPage";

import NavAuthBar from "../ui/components/NavAuthBar";
import Footer from "../ui/components/Footer";

export const renderRoutes = () => {
  return (
    <BrowserRouter>
      <NavAuthBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={AuthLogin} />
        <Route exact path="/signup" component={AuthSignup} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:_id" component={BlogPost} />
        <Route exact path="/admin/users" component={Users} />
        <Route component={NotFoundPage} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
};

/**
 * 
 * 
 * 
const unauthenticatedPages = ["/", "/login", "/signup"];
const authenticatedPages = ["/blog", "/admin/users"];

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace("/blog");
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace("/");
  }
};
export const onAuthChange = isAuthenticated => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace("/blog");
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace("/");
  }
};
 */
