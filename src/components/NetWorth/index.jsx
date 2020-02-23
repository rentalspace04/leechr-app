import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import Amount from "../Amount";

const NetWorthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  p {
    margin-top: 4px;
    font-size: ${({ size }) => size / 2}px;
    font-variant: small-caps;
  }
`;

export const NetWorth = ({ amount, size = 18 }) => (
  <NetWorthWrapper size={size}>
    <Amount amount={amount} size={size} />
    <p>Net Worth</p>
  </NetWorthWrapper>
);

NetWorth.propTypes = {
  amount: PropTypes.number,
  size: PropTypes.number
};

export default NetWorth;
