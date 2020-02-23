import _ from "lodash";
import React from "react";
import Helmet from "react-helmet";

import Person, { PeopleWrapper } from "../components/Person";
import people from "../utils/people";

export class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Leechr | People</title>
        </Helmet>
        <PeopleWrapper>
          {_.map(people, person => (
            <Person person={person} key={person.id} />
          ))}
        </PeopleWrapper>
      </>
    );
  }
}

export default PeoplePage;
