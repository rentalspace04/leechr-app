import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import ProfilePage from './pages/profile'
import PeoplePage from './pages/profile'
import EventPage from './pages/profile'
import HomePage from './pages/profile'

function App() {
  return <Router>
    <Switch>
      <Route path="people/:personID">
        <ProfilePage />
      </Route>
      <Route path="people">
        <PeoplePage />
      </Route>
      <Route path="event/:eventID">
        <EventPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>
}

export default App;
