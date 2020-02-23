import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import colors from "../../utils/colors";
import { Amount } from "../Amount";
import { ArrowRight } from "../icons/ArrowRight";
import { ToNames } from "../ToNames";

const FromName = styled.div``;

const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  border-bottom: 1px solid ${colors.background.highlight};

  cursor: pointer;

  background-color: ${colors.background.main_high};
  transition: background-color 0.2s ease;

  &:active,
  &:focus,
  &:hover {
    background-color: ${colors.background.main_high2};
  }

  &:last-child {
    border-bottom: none;
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    > div {
      padding: 0 5px;
      flex: 1;
      &.amount {
        flex: 0 0 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        > svg {
          width: 20px;
          height: 15px;
          fill: ${colors.text.positive};
        }
      }
    }

    font-size: 18px;

    padding: 0 0 10px 0;

    &:first-child {
      font-size: 11px;
      font-variant: small-caps;
      padding: 10px 0 0 0;
    }
  }
`;

export const Event = ({ event: { from, amount, to, id } }) => {
  const history = useHistory();
  return (
    <EventWrapper amount={amount} onClick={() => history.push(`/event/${id}`)}>
      <div>
        <div>From</div>
        <div className="amount">Amount</div>
        <div>To</div>
      </div>
      <div>
        <div>
          <FromName>{from.name}</FromName>
        </div>
        <div className="amount">
          <Amount amount={amount} />
          <ArrowRight />
        </div>
        <div>
          <ToNames to={to} />
        </div>
      </div>
    </EventWrapper>
  );
};

Event.propTypes = {
  event: PropTypes.object
};

export const EventsWrapper = styled.div`
  background-color: ${colors.background.main_high};
  border-radius: 2px;
`;

export default Event;
