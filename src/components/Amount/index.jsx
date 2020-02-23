import numeral from "numeral";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { moneyColor } from "../../utils/colors";

export const AmountWrapper = styled.h3`
  color: ${({ amount }) => moneyColor(amount)};
  font-size: ${({ size }) => size}px;
`;

export const Amount = ({ amount, size = 18 }) => {
  return (
    <AmountWrapper amount={amount} size={size}>
      {numeral(amount).format("$0.00")}
    </AmountWrapper>
  );
};

Amount.propTypes = {
  amount: PropTypes.number,
  size: PropTypes.number
};

export default Amount;
