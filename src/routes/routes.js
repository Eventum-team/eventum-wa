import React from "react";
import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";
import MainLayout from "../components/layout";
import Home from "../views/home";
import SignIn from "../views/signIn";
import SignUp from "../views/signUp";
import Groups from "../views/groups";
import Events from "../views/events";
import GroupProfile from "../views/groupProfile";
import EventMap from "../components/map";
import EventProfile from "../views/eventProfile";
import UserProfile from "../views/userProfile";
// import EditGroup from "../views/editGroup";
// import EditEvent from "../views/editEvent";
// import EditProfile from "../views/editProfile";
import CreateGroup from "../views/createGroup";
import CreateEvent from "../views/createEvent";
// import CreateProfile from "../views/createProfile";
// import NotFound from "../views/notFound";

import Avatar from '../views/uploadPhotoTest';

const routes = () => {
  return (
    <Routes>
      <Switch>
        {/* afuera del MainLayout para que no tengan navbar o footer */}
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <MainLayout>
          {/* <Redirect exact from="/" to="home" /> */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/searchGroups" component={Groups} />
          <Route exact path="/searchEvents" component={Events} />
          <Route exact path="/createGroup" component={CreateGroup} />
          <Route exact path="/eventProfile/:id" component={EventProfile} />
          <Route exact path="/userProfile/:id" component={UserProfile} />
          <Route exact path="/createEvent" component={CreateEvent} />
          <Route exact path="/groupProfile/:id" component={GroupProfile} />
          <Route exact path="/photo" component={Avatar} />
        </MainLayout>
        <Route component={SignIn} />
      </Switch>
    </Routes>
  );
};

export default routes;
