import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import colors from "../../utils/colors";

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px 0;
`;

const HeaderItem = styled(NavLink)`
  color: #fff;
  font-size: 18px;

  padding: 0 0 10px 0;
  margin-right: 20px;
  position: relative;

  text-decoration: none;

  ::after {
    content: "";
    height: 4px;
    width: 40px;
    border-radius: 2px;

    background-color: ${colors.background.highlight};

    transition: background-color 0.2s ease;

    position: absolute;
    top: 100%;
    left: 50%;

    transform: translate3d(-50%, -3px, 0px);
  }

  &.active {
    ::after {
      background-color: ${colors.red.main};
    }
  }
`;

export const Header = () => (
  <HeaderWrapper>
    <HeaderItem
      strict
      to="/"
      isActive={(match, location) => {
        if (!match || !location) {
          return false;
        }
        return location.pathname === "/";
      }}
    >
      Ledger
    </HeaderItem>
    <HeaderItem strict to="/people">
      People
    </HeaderItem>
  </HeaderWrapper>
);

export default Header;
