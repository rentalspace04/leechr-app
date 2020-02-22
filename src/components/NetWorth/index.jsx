import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const NetWorthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 10px;
    font-variant: small-caps;
  }
`;

export const NetWorth = ({ amount }) => (
  <NetWorthWrapper>
    <h3>${amount}</h3>
    <p>Net Worth</p>
  </NetWorthWrapper>
);

NetWorth.propTypes = {
  amount: PropTypes.oneOfType(PropTypes.number, PropTypes.string)
};

export default NetWorth;
