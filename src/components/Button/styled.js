import styled from 'styled-components';
import { darken } from 'polished';

import { colorMainButton, colorText } from '../../styles/variables';

export const MainButton = styled.button`
  width: ${props => (props.fullSpan ? '100%' : 'auto')};
  display: inline-block;
  background-color: ${colorMainButton};
  padding: 14px 32px;
  letter-spacing: 3px;
  font-size: 1.4rem;
  display: inline-block;
  font-weight: 300;
  margin: 0 auto;
  color: #fff;
  outline: none;
  text-transform: capitalize;
  border-radius: 5px;
  border: none;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    color: ${colorText};
    background-color: ${darken(0.5, `${colorMainButton}`)};
  }
`;
MainButton.displayName = 'MainButton';
