import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const NameWrapper = styled.div`
  font-size: ${({ big }) => (big ? "18px" : "13px")};
  padding-bottom: 3px;

  &:last-child {
    padding-bottom: 0;
  }
`;

const Name = ({ to, big }) => (
  <NameWrapper big={big}>{to.person.name}</NameWrapper>
);
Name.propTypes = {
  to: PropTypes.object,
  big: PropTypes.bool
};

const AndMorePeople = styled.p`
  font-size: 10px;
  font-style: italic;
`;

const NamesWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ToNames = ({ to }) => {
  const people = _.size(to);
  return (
    <NamesWrapper>
      {_(to)
        .take(2)
        .map(person => (
          <Name key={person.person.id} to={person} big={people === 1} />
        ))
        .value()}

      {people === 3 && <AndMorePeople>And one other person...</AndMorePeople>}
      {people > 3 && (
        <AndMorePeople>And {people - 2} other people...</AndMorePeople>
      )}
    </NamesWrapper>
  );
};

ToNames.propTypes = {
  to: PropTypes.arrayOf(PropTypes.object)
};
