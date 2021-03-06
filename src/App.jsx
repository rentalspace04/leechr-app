import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import PageWrapper, { PageContent } from "./components/PageWrapper";
import GlobalStyles from "./globalStyles";
import EventPage from "./pages/event";
import HomePage from "./pages/home";
import PeoplePage from "./pages/people";
import ProfilePage from "./pages/profile";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider
        theme={createMuiTheme({
          palette: {
            primary: {
              main: "#2c446b"
            },
            secondary: {
              main: "#d62a1e"
            }
          }
        })}
      >
        <Router>
          <PageWrapper>
            <PageContent>
              <Header />
              <Switch>
                <Route path="/people/:personID">
                  <ProfilePage />
                </Route>
                <Route path="/people">
                  <PeoplePage />
                </Route>
                <Route path="/event/:eventID">
                  <EventPage />
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </PageContent>
            <Footer />
          </PageWrapper>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
