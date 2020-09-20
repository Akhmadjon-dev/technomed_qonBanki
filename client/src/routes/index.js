import React from "react";
import { Route } from "react-router-dom";
import SignUp from "../containers/Auth/SignUp";
import SignIn from "../containers/Auth/SignIn";
import Bloods from "../containers/Bloods/Bloods_List";

export default {
  authenticated: [
    <Route
      key="userProfilePage"
      path="/profile"
      exact
      render={() => <h2>User profile will be here!</h2>}
    />,
    <Route key="bloodsList" path="/bloods" exact component={Bloods} />,
  ],
  notAuthenticated: [
    <Route key="SignIn" path="/sign-in" exact component={SignIn} />,
    <Route key="SignUp" path="/sign-up" exact component={SignUp} />,
  ],
};
