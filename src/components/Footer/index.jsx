import React from "react";
import styled from "styled-components";

import colors from "../../utils/colors";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  background-color: ${colors.background.lowlight};
  padding: 30px 15px;
  height: 120px;

  border-top: 3px solid #ffffffaa;

  position: absolute;
  bottom: 0;
  width: 100%;

  h3 {
    font-size: 32px;
    font-family: "Roboto Slab", serif;
    color: #ffffff;
    > span {
      color: ${colors.red.main};
    }
    padding-bottom: 10px;
  }

  p {
    font-size: 8px;
  }
`;

export const Footer = () => (
  <FooterWrapper>
    <h3>
      Leechr<span>.</span>
    </h3>
    <p>Copyright &copy; 2020 Danyon Ramsay Pty. Ltd. Inc.</p>
  </FooterWrapper>
);

export default Footer;
