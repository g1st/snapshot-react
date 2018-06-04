import styled from 'styled-components';

import {
  colorHeadingText,
  colorText,
  colorMainDark,
  maxContentWidth,
  maxTextWidth
} from '../../styles/variables';

export const Wrapper = styled.div`
  padding: 60px 0 20px 0;
  background-color: ${colorMainDark};
`;
Wrapper.displayName = 'Wrapper';

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${maxContentWidth};
  text-align: center;
`;
Container.displayName = 'Container';

export const Form = styled.form``;
Form.displayName = 'Form';

export const HeadingText = styled.div`
  text-transform: uppercase;
  color: ${colorHeadingText};
  letter-spacing: 6px;
  font-size: 1.8rem;
  line-height: 36px;
  padding: 0 10px 40px 10px;
  font-weight: 300;
  @media (min-width: 768px) {
    letter-spacing: 14px;
    font-size: 2.4rem;
    padding-bottom: 60px;
  }
`;
HeadingText.displayName = 'HeadingText';

export const Text = styled.div`
  color: ${colorText};
  letter-spacing: 3px;
  max-width: ${maxTextWidth};
  margin: 0 auto;
  line-height: 24px;
  font-size: 1rem;
  font-weight: 300;
  padding: 0 10px;
  @media (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 32px;
  }
`;
Text.displayName = 'Text';
