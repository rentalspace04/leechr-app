import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import colors from "../../utils/colors";
import { Amount } from "../Amount";

const DebtWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > a {
    color: ${colors.text.main};

    font-size: 24px;
    margin: 0 0 10px 70px;
  }
`;

export const DebtDetail = ({
  debt: {
    person: { id, name },
    amount
  },
  negative = true
}) => {
  return (
    <DebtWrapper>
      <Link to={`/people/${id}`}>{name}</Link>
      <Amount amount={amount} negative={negative} size={24} />
    </DebtWrapper>
  );
};

DebtDetail.propTypes = {
  debt: PropTypes.object,
  negative: PropTypes.bool
};

export const DebtsWrapper = styled.div``;

export default DebtDetail;
