import styled from 'styled-components';

export const StatHeading = styled.h2`
  margin-bottom: 15px;
  font-size: ${p => p.theme.fontSizes.l}px;
`;

export const StatList = styled.ul`
  font-size: ${p => p.theme.fontSizes.s * 2}px;
  text-align: end;
`;
