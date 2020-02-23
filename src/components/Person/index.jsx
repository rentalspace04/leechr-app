import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import colors from "../../utils/colors";
import NetWorth from "../NetWorth";

const Name = styled.div`
  font-size: 24px;
`;

const PersonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  padding: 10px 5px;

  border-bottom: 1px solid ${colors.background.highlight};

  cursor: pointer;

  background-color: ${colors.background.main_high};
  transition: background-color 0.2s ease;

  > div {
    &:first-child {
    }
    &:last-child {
      flex: 0 0 100px;
    }
  }

  &:active,
  &:focus,
  &:hover {
    background-color: ${colors.background.main_high2};
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const Person = ({ person: { id, name, networth } }) => {
  const history = useHistory();
  return (
    <PersonWrapper onClick={() => history.push(`/people/${id}`)}>
      <Name>{name}</Name>
      <NetWorth amount={networth} />
    </PersonWrapper>
  );
};

Person.propTypes = {
  person: PropTypes.object
};

export const PeopleWrapper = styled.div`
  background-color: ${colors.background.main_high};
  border-radius: 2px;
`;

export default Person;
