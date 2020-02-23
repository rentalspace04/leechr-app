import styled from "styled-components";

import colors from "../../utils/colors";

export const Button = styled.button`
  border: 2px solid ${colors.background.darkblue};
  background: none;
  color: ${colors.background.darkblue};

  > svg {
    width: 16px;
    fill: ${colors.background.darkblue};
  }

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border-radius: 5px;
  min-width: 120px;
  font-size: 20px;
  padding: 5px;

  transition: background-color 0.2s ease;

  &:hover,
  &:active {
    background-color: ${colors.background.main_high2};
  }
`;

export default Button;
