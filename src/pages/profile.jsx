import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import styled from "styled-components";

import BackHeader from "../components/BackHeader";
import DebtDetail, { DebtsWrapper } from "../components/DebtDetail";
import Heading from "../components/Heading";
import NameHeader from "../components/NameHeader";
import NetWorth from "../components/NetWorth";
import EVENTS_LIST from "../utils/events";
import people, { people_by_id } from "../utils/people";

const Spacer = styled.div`
  height: 20px;
`;
const None = styled.div`
  font-size: 16px;
  font-style: italic;
  text-align: center;
`;

export class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { history, person, owes, owed } = this.props;
    return (
      <>
        <Helmet>
          <title>Leechr | {person.name}&apos;s Profile</title>
        </Helmet>
        <BackHeader history={history} />
        <NameHeader person={person} noLink />
        <Spacer />
        <NetWorth amount={person.networth} size={36} />

        <Heading>Owes:</Heading>
        <DebtsWrapper>
          {_.map(owes, (detail, i) => (
            <DebtDetail debt={detail} key={i} negative />
          ))}
          {_.size(owes) === 0 && (
            <None>{person.name} doesn&apos;t owe anyone.</None>
          )}
        </DebtsWrapper>
        <Heading>Owed:</Heading>
        <DebtsWrapper>
          {_.map(owed, (debt, i) => (
            <DebtDetail debt={debt} key={i} negative={false} />
          ))}
          {_.size(owed) === 0 && <None>No one owes {person.name}.</None>}
        </DebtsWrapper>
      </>
    );
  }
}

ProfilePage.propTypes = {
  person: PropTypes.object,
  owes: PropTypes.arrayOf(PropTypes.object),
  owed: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.object
};

const mapStateToProps = (state, props) => {
  const id = Number.parseInt(_.get(props, "match.params.personID", "0"));
  const person = _.find(people, { id });

  const all_from = _.filter(EVENTS_LIST, { from: { id } });
  const all_to = _.filter(EVENTS_LIST, event => {
    return _.find(event.to, { person: { id } });
  });

  const related_people = {};
  const owes = [];
  const owed = [];

  _.forEach(all_from, from => {
    _.forEach(from.to, ({ person, amount }) => {
      if (_.has(related_people, person.id)) {
        related_people[person.id] += amount;
      } else {
        related_people[person.id] = amount;
      }
    });
  });

  _.forEach(all_to, to => {
    const debt = _.find(to.to, { person: { id } });

    if (debt) {
      if (_.has(related_people, to.from.id)) {
        related_people[to.from.id] -= debt.amount;
      } else {
        related_people[to.from.id] = -debt.amount;
      }
    }
  });

  _.forEach(related_people, (amount, person_id) => {
    if (amount > 0) {
      const person = _.get(people_by_id, person_id);
      owed.push({
        amount,
        person
      });
    } else if (amount < 0) {
      const person = _.get(people_by_id, person_id);
      owes.push({
        amount: -1 * amount,
        person
      });
    }
  });

  return {
    person,
    owes,
    owed
  };
};

export default compose(withRouter, connect(mapStateToProps))(ProfilePage);
