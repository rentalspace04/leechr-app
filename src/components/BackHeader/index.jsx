import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import colors from "../../utils/colors";
import BackArrow from "../icons/BackArrow";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  background-color: #fff;
  fill: ${colors.background.darkblue};

  height: 80px;

  border-bottom: 2px solid ${colors.background.highlight};

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  > div {
    padding-left: 20px;

    cursor: pointer;

    > svg {
      fill: ${colors.background.darkblue};
    }
  }
`;

const Spacer = styled.div`
  height: 20px;
`;

export const BackHeader = ({ history }) => (
  <>
    <HeaderWrapper>
      <div
        onClick={() => {
          console.log(history);
          history.goBack();
        }}
      >
        <BackArrow />
      </div>
    </HeaderWrapper>
    <Spacer />
  </>
);

BackHeader.propTypes = {
  history: PropTypes.object
};

export default BackHeader;
