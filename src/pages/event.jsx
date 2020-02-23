import _ from "lodash";
import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import styled from "styled-components";

import Amount from "../components/Amount";
import BackHeader from "../components/BackHeader";
import DebtDetail, { DebtsWrapper } from "../components/DebtDetail";
import NameHeader from "../components/NameHeader";
import EVENTS_LIST from "../utils/events";

const Description = styled.div`
  font-size: 24px;
  font-style: italic;
  text-align: center;
  margin: 20px 0 10px;
`;

const AmountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Heading = styled.h2`
  font-size: 32px;
`;
const Time = styled.div`
  font-size: 16px;
  font-style: italic;
  text-align: center;
  margin: 10px 0 20px;
`;

export class EventPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { history, event } = this.props;
    return (
      <>
        <BackHeader history={history} />
        <NameHeader person={event.from} isFrom />
        <Description>{event.description}</Description>
        <Time>
          At {moment(event.timestamp).format("MMMM Do YYYY, h:mm:ss a")}
        </Time>
        <AmountWrapper>
          <Heading>Paid:</Heading>
          <Amount amount={event.amount} size={32} />
        </AmountWrapper>
        <Heading>For:</Heading>
        <DebtsWrapper>
          {_.map(event.to, (debt, i) => (
            <DebtDetail debt={debt} key={i} />
          ))}
        </DebtsWrapper>
      </>
    );
  }
}

EventPage.propTypes = {
  event: PropTypes.object,
  history: PropTypes.object
};

const mapStateToProps = (state, props) => {
  const id = Number.parseInt(_.get(props, "match.params.eventID", "0"));

  return {
    event: _.find(EVENTS_LIST, { id })
  };
};

export default compose(withRouter, connect(mapStateToProps))(EventPage);
