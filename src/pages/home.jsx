import _ from "lodash";
import React from "react";
import Helmet from "react-helmet";

import Event, { EventsWrapper } from "../components/Event";
import EVENTS_LIST from "../utils/events";

export class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Leechr | Ledger</title>
        </Helmet>
        <EventsWrapper>
          {_.map(EVENTS_LIST, event => (
            <Event event={event} key={event.id} />
          ))}
        </EventsWrapper>
      </>
    );
  }
}

export default HomePage;
