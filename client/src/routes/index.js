import React from "react";
import { Route } from "react-router-dom";
import SignUp from "../containers/Auth/SignUp";
import SignIn from "../containers/Auth/SignIn";
import Bloods from "../containers/Bloods/Bloods_List";
import Users from "../containers/Users/Users";
import Applications from "../containers/Applications/Applications";
import Applications_Add from "../containers/Applications/Applications_Add";

export default {
  authenticated: [
    <Route
      key="userProfilePage"
      path="/profile"
      exact
      render={() => <h2>User profile will be here!</h2>}
    />,
    <Route key="bloodsList" path="/bloods" exact component={Bloods} />,
    <Route key="usersList" path="/users" exact component={Users} />,
    <Route
      key="applicationsList"
      path="/applications"
      exact
      component={Applications}
    />,
    <Route
      key="applicationsAdd"
      path="/applications/new"
      exact
      component={Applications_Add}
    />,
  ],
  notAuthenticated: [
    <Route key="SignIn" path="/sign-in" exact component={SignIn} />,
    <Route key="SignUp" path="/sign-up" exact component={SignUp} />,
  ],
};
