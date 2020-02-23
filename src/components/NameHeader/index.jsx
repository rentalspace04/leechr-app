import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import colors from "../../utils/colors";

const NameHeaderWrapper = styled(Link)`
  color: ${colors.text.main};
  font-size: 40px;
  text-align: center;

  display: block;
  text-decoration: none;
  color: ${colors.text.main};
  transition: color 0.2s ease;

  padding: 0 0 14px 0;
  position: relative;

  user-select: none;

  font-weight: 500;

  ${({ noLink }) =>
      !noLink &&
      css`
        > span {
          text-decoration: underline;
        }
        cursor: pointer;
        &:active,
        &:hover {
          color: ${colors.background.lowlight};
        }
      `}
    ::after {
    content: "";
    height: 5px;
    width: 60px;
    border-radius: 3px;

    background-color: ${colors.red.main};

    position: absolute;
    top: 100%;
    left: 50%;

    transform: translate3d(-50%, -3px, 0px);
  }
`;

export const NameHeader = ({ person: { id, name }, isFrom, noLink }) => (
  <NameHeaderWrapper
    to={`/people/${id}`}
    as={noLink ? "h2" : undefined}
    noLink={noLink}
  >
    {isFrom && "From "}
    <span>{name}</span>
  </NameHeaderWrapper>
);

NameHeader.propTypes = {
  person: PropTypes.object,
  isFrom: PropTypes.bool,
  noLink: PropTypes.bool
};

export default NameHeader;
